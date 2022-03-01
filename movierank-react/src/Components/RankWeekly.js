import React, { Component } from 'react';
import RankWeeklyItem from './RankWeeklyItem';
import moment from 'moment';
import 'moment/locale/ko';

const key = "d4099bba8c7c754a4c1c195450e4a028";
const format = "YYYYMMDD";
const last_sunday = moment().day(7).subtract(7, 'days').format(format);

class RankWeekly extends Component {
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
            `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${key}&targetDt=${last_sunday}&weekGb=0`
        )
            .then(a => a.json())
            .then(json => json.boxOfficeResult.weeklyBoxOfficeList)
            .catch(err => console.log(err));
    };

    _renderMovies = () => {
        const movies = this.state.movies.map((weeklyBoxOfficeList, index) => {
            return (
                <RankWeeklyItem
                    rankOldAndNew={weeklyBoxOfficeList.rankOldAndNew}
                    rankInten={weeklyBoxOfficeList.rankInten}
                    rank={weeklyBoxOfficeList.rank}
                    movieNm={weeklyBoxOfficeList.movieNm}
                    openDt={weeklyBoxOfficeList.openDt}
                    audiCnt={weeklyBoxOfficeList.audiCnt}
                    salesShare={weeklyBoxOfficeList.salesShare}
                    key={index}
                />
            );
        });
        return movies;
    };
    render() {
        const loading = {
            textAlign: 'center',
            fontFamily: 'Jua',
            fontSize: '30px',
        }
        const { movies } = this.state;
        return (
            <div style={loading}
                className={movies ? "RankWeekly" : "RankWeekly-loading"}>
                {movies ? this._renderMovies() : "Loading ···"}
            </div>
        );
    }
}
export default RankWeekly;