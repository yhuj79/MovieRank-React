import React, { Component } from "react";
import DailyChartItem from "./DailyChartItem";
import moment from 'moment';
import 'moment/locale/ko';

const key = "d4099bba8c7c754a4c1c195450e4a028";
const yesterday = moment().subtract(1, 'days').format('YYYYMMDD');

class DailyChart extends Component {
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
            `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${yesterday}&weekGb=0`
        )
            .then(a => a.json())
            .then(json => json.boxOfficeResult.dailyBoxOfficeList)
            .catch(err => console.log(err));
    };

    _renderMovies = () => {
        const movies = this.state.movies.map((dailyBoxOfficeList, index) => {
            return (
                <DailyChartItem
                    rankOldAndNew={dailyBoxOfficeList.rankOldAndNew}
                    rankInten={dailyBoxOfficeList.rankInten}
                    rank={dailyBoxOfficeList.rank}
                    movieNm={dailyBoxOfficeList.movieNm}
                    openDt={dailyBoxOfficeList.openDt}
                    audiCnt={dailyBoxOfficeList.audiCnt}
                    salesShare={dailyBoxOfficeList.salesShare}
                    key={index}
                />
            );
        });
        return movies;
    };
    render() {
        const { movies } = this.state;
        return (
            <div className={movies ? "DailyChart" : "DailyChart-loading"}>
                {movies ? this._renderMovies() : "로딩중 ..."}
            </div>
        );
    }
}
export default DailyChart;