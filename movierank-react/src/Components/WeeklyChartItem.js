import React from "react";
import PropTypes from "prop-types";
import './WeeklyChartItem.css';

function addComma(num) {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}

function WeeklyChartItem({ rankOldAndNew, rankInten, rank, movieNm, openDt, audiCnt, salesShare }) {
    return (
        <div>
            <div className="chartitem_movietitle">
                <div className="chartitem_movietitlesection">
                    <div><p>{rank}위 : {movieNm}</p></div>
                    <div className="chartitem_rankchange">
                        {rankOldAndNew === 'OLD' ? (
                            <span></span>
                        ) : (
                            <span>&emsp;new</span>
                        )}
                    </div>
                </div>
                <div>
                    <div className="chartitem_rankchange">
                        {rankInten > 0 ? (
                            <span>(↑{rankInten})</span>
                        ) : (rankInten < 0
                            ? <span>(↓{Math.abs(rankInten)})</span>
                            : <span></span>
                        )}
                    </div>
                </div>
            </div>
            <p>
                개봉일 : {openDt}
            </p>
            <p>
                주간 : {addComma(audiCnt)}명
            </p>
            <p>
                점유율 : {salesShare}%
            </p>
            <br />
        </div>
    );
}
WeeklyChartItem.propTypes = {
    rankInten: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    movieNm: PropTypes.string.isRequired,
    openDt: PropTypes.string.isRequired,
    audiCnt: PropTypes.string.isRequired,
    salesShare: PropTypes.string.isRequired,
};
export default WeeklyChartItem;