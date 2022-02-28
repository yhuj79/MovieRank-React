import React, { useState } from 'react';
import './Movie.css';

function Movie({ rank, name, image, link, release, audience, tmeter,
    tscore, mscore, mreview, boxoffice, actor, award, story }) {

    const [limit, setLimit] = useState(239);
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
                <a className="movie_youtubebutton" href={link} target="_blank" rel="noopener noreferrer">YOUTUBE</a>
            </div>
            <div className="movie_infodiv">
                <p className="movie_name">{rank}. {name}</p>
                <div className="movie_firstbox">
                    <p className="movie_rd">개봉 : {release}</p>
                    <p className="movie_rd">누적 : {audience.toLocaleString('en')}명</p>
                    <p className="movie_rd">출현 : <span className="movie_actor">{actor}</span></p>
                </div>
                <div className="movie_secondbox">
                    <div className="movie_tomato">
                        <p className="movie_tomatologo">Rotten Tomatoes</p>
                        <p>토마토 미터 : {tmeter === 0 ? <span className="nonestyle">없음</span> : tmeter + "%"}</p>
                        <p>관객 점수 &emsp;: {tscore === 0 ? <span className="nonestyle">없음</span> : tscore + "%"}</p>
                    </div>
                    <div className="movie_metacritic">
                        <p className="movie_metacriticlogo">Metacritic</p>
                        <p>메타 스코어 : {mscore === 0 ? <span className="nonestyle">없음</span> : mscore + " / 100"}</p>
                        <p>유저 리뷰 &nbsp;: {mreview === 0 ? <span className="nonestyle">없음</span> : mreview + " / 10"}</p>
                    </div>
                    <div className="movie_boxoffice">
                        <p className="movie_boxofficelogo">World Box Office</p>
                        <p className="movie_boxofficestat">$ {boxoffice.toLocaleString('en')}</p>
                    </div>
                </div>
                <div className="movie_thirdbox">
                    <p className="movie_award">🏆 {award} 🏆</p>
                    <p className="movie_story">
                        {toggleEllipsis(story, limit).string}
                        {toggleEllipsis(story, limit).isShowMore &&
                            <button className="movie_morebutton" onClick={onClickMore(story)}>‧‧‧ 더보기</button>}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Movie;