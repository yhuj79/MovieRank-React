import React, { Component } from "react";
import RankDailyItem from "./RankDailyItem";
import moment from 'moment';
import 'moment/locale/ko';

const key = process.env.REACT_APP_API_KEY;
const yesterday = moment().subtract(1, 'days').format('YYYYMMDD');

class RankDaily extends Component {
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
                <RankDailyItem
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
        const loading = {
            textAlign: 'center',
            fontFamily: 'Jua',
            fontSize: '30px',
        }
        const { movies } = this.state;
        return (
            <div style={loading} className={movies ? "RankDaily" : "RankDaily-loading"}>
                {movies ? this._renderMovies() : "Loading ยทยทยท"}
            </div>
        );
    }
}
export default RankDaily;