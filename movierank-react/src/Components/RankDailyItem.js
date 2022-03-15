import React from "react";
import PropTypes from "prop-types";
import './ChartItem.css';
import styled from 'styled-components';

function addComma(num) {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}

function RankDailyItem({ rankOldAndNew, rankInten, rank, movieNm, openDt, audiCnt, salesShare }) {

    const movieLink = () => {
        window.open('about:blank').location.href =
            `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${movieNm}`;
    }

    function rankpercent() {
        if (salesShare > 50) {
            return <Percent50>점유율 {salesShare}%</Percent50>
        } else if (salesShare > 40) {
            return <Percent40>점유율 {salesShare}%</Percent40>
        } else if (salesShare > 30) {
            return <Percent30>점유율 {salesShare}%</Percent30>
        } else if (salesShare > 20) {
            return <Percent20>점유율 {salesShare}%</Percent20>
        } else if (salesShare > 10) {
            return <Percent10>점유율 {salesShare}%</Percent10>
        } else if (salesShare > 5) {
            return <Percent5>점유율 {salesShare}%</Percent5>
        } else {
            return <Percent0>점유율 {salesShare}%</Percent0>
        }
    }
    return (
        <div className="chartitem_div" onClick={movieLink}>
            <div className="chartitem_movietitle">
                <div className="chartitem_movietitleOne">
                    <div>
                        <p>
                            {rank}위 :&emsp;
                            {movieNm.length > 25 ? (
                                <span style={{ fontSize: '14px' }}>{movieNm}</span>
                            ) : (movieNm.length > 20
                                ? <span style={{ fontSize: '16px' }}>{movieNm}</span>
                                : (movieNm.length > 13
                                    ? <span style={{ fontSize: '20' }}>{movieNm}</span>
                                    : <span>{movieNm}</span>
                                )
                            )}
                        </p>
                    </div>
                    <div className="chartitem_rankchange">
                        {rankOldAndNew === 'OLD' ? (
                            ""
                        ) : (
                            <span className="chartitem_ranknew">&emsp;new</span>
                        )}
                    </div>
                </div>
                <div className="chartitem_movietitleOne">
                    <div className="chartitem_rankchange">
                        {rankInten > 0 ? (
                            <span className="chartitem_rankup">&emsp;▲ {rankInten}</span>
                        ) : (rankInten < 0
                            ? <span className="chartitem_rankdown">&emsp;▼ {Math.abs(rankInten)}</span>
                            : ""
                        )}
                    </div>
                </div>
            </div>
            <div className="chartitem_movieinfo">
                <p>
                    개봉&emsp;:&emsp;{openDt}
                </p>
                <p>
                    주간&emsp;:&emsp;{addComma(audiCnt)}명
                </p>
                <div className="chartitem_moviepercent">
                    {rankpercent()}
                </div>
            </div>
        </div>
    );
}
RankDailyItem.propTypes = {
    rankInten: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    movieNm: PropTypes.string.isRequired,
    openDt: PropTypes.string.isRequired,
    audiCnt: PropTypes.string.isRequired,
    salesShare: PropTypes.string.isRequired,
};
export default RankDailyItem;

const Percent50 = styled.span`
    background-color: #A50400;
    border-radius: 5px;
    padding: 5px 8px 5px;
`
const Percent40 = styled.span`
    background-color: #C92800;
    border-radius: 5px;
    padding: 5px 8px 5px;
`
const Percent30 = styled.span`
    background-color: #ED4C00;
    border-radius: 5px;
    padding: 5px 8px 5px;
`
const Percent20 = styled.span`
    background-color: #FF7012;
    border-radius: 5px;
    padding: 5px 8px 5px;
`
const Percent10 = styled.span`
    background-color: #FF9436;
    border-radius: 5px;
    padding: 5px 8px 5px;
`
const Percent5 = styled.span`
    background-color: #FFCA6C;
    border-radius: 5px;
    padding: 5px 8px 5px;
`
const Percent0 = styled.span`
    background-color: #FFFFA2;
    border-radius: 5px;
    padding: 5px 8px 5px;
`