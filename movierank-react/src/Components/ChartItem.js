import React from "react";
import PropTypes from "prop-types";

function ChartItem({ rank, movieNm }) {
    return (
        <div>
            <p>
                {rank}위:{movieNm}
            </p>
        </div>
    );
}
ChartItem.propTypes = {
    rank: PropTypes.string.isRequired,
    movieNm: PropTypes.string.isRequired
};
export default ChartItem;