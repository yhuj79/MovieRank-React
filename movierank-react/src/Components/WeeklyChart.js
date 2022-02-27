import React, { Component } from "react";
import ChartItem from "./ChartItem";

const key = "d4099bba8c7c754a4c1c195450e4a028";

const getDate = new Date();
const yDate = getDate.getTime(1 * 24 * 60 * 60 * 1000);
getDate.setTime(yDate);
var yYear = getDate.getFullYear();
var yMonth = getDate.getMonth() + 1;
var yDay = getDate.getDate() - 1;

if (yMonth < 10) {
    yMonth = "0" + yMonth;
}
if (yDay < 10) {
    yDay = "0" + yDay;
}
const resultDate = yYear + "-" + yMonth + "-" + yDay;
const res = resultDate.slice(0, 10).replace(/-/g, "");

class WeeklyChart extends Component {
    state = {};
    componentDidMount() {
        this._getMovies();
    }
    _getMovies = async () => {
        const movies = await this._callApi();
        this.setState({
            movies
        });
    };
    _callApi = () => {
        return fetch(
            `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${key}&targetDt=${res}&weekGb=0`
        )
            .then(a => a.json())
            .then(json => json.boxOfficeResult.weeklyBoxOfficeList)
            .catch(err => console.log(err));
    };

    _renderMovies = () => {
        const movies = this.state.movies.map((weeklyBoxOfficeList, index) => {
            return (
                <ChartItem
                    rank={weeklyBoxOfficeList.rank}
                    movieNm={weeklyBoxOfficeList.movieNm}
                    key={index}
                />
            );
        });
        return movies;
    };
    render() {
        const { movies } = this.state;
        return (
            <div className={movies ? "WeeklyChart" : "WeeklyChart-loading"}>
                {movies ? this._renderMovies() : "로딩중 ..."}
            </div>
        );
    }
}
export default WeeklyChart;