import React, { useState } from 'react';
import './Movie.css';

function Movie({ rank, name, image, release, audience, actor, award, story }) {
    const [limit, setLimit] = useState(112);
    const toggleEllipsis = (str, limit) => {
        return {
            string: str.slice(0, limit),
            isShowMore: str.length > limit
        }
    };
    const onClickMore = (str) => () => {
        setLimit(str.length);
    };
    return (
        <div className="movie_div">
            <div>
                <img className="movie_img" alt="" src={image} />
                <p>Link</p>
            </div>
            <div>
                <p className="movie_name">{rank}. {name}</p>
                <div className="movie_rddiv">
                    <p className="movie_rd">개봉 : {release}.</p>
                    <p className="movie_rd">누적 : {audience.toLocaleString('en')}명</p>
                    <p className="movie_rd">출현 : <span className="movie_actor">{actor}</span></p>
                </div>
                <div className="movie_score">
                    <div className="movie_tomato">
                        <p className="movie_tomatologo">Rotten Tomatoes</p>
                        <p>Tomato  Meter &nbsp;&nbsp;: 93%</p>
                        <p>Audience Score : 87%</p>
                    </div>
                    <div className="movie_metac">
                        <p className="movie_metalogo">Metacritic</p>
                        <p>Meta Score &nbsp;&nbsp;: 77 / 100</p>
                        <p>User Review : 7.0 / 10</p>
                    </div>
                    <div className="movie_metac">
                        <p className="movie_metalogo">World Box Office</p>
                        <p>$1,834,136,947</p>
                    </div>
                </div>
                <div className="movie_box">
                    <p className="movie_award">🏆 {award} 🏆</p>
                    <p className="movie_story">
                        {toggleEllipsis(story, limit).string}
                        {toggleEllipsis(story, limit).isShowMore &&
                            <button className="movie_storybutton" onClick={onClickMore(story)}>‧‧‧ more</button>}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Movie;