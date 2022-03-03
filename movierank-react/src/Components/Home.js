import React from 'react';
import HomeSlide from './HomeSlide';
import RankWeekly from './RankWeekly';
import RankDaily from './RankDaily';
import './List/List.css';
import './Home.css';
import moment from 'moment';
import 'moment/locale/ko';

import Kofic from './SourceImage/source_kofic.jpg';
import Mojo from './SourceImage/source_mojo.jpg';
import Naver from './SourceImage/source_naver.jpg';
import Tomato from './SourceImage/source_tomato.jpg';
import Meta from './SourceImage/source_meta.jpg';

function Home() {
    const format = "YYYY.MM.DD";
    const last_sunday = moment().day(7).subtract(7, 'days').format(format);
    const lastlast_sunday = moment().day(7).subtract(13, 'days').format(format);
    const yesterday = moment().subtract(1, 'days').format(format);
    return (
        <div className="list_div">
            <div className="home_div">
                <div className="home_homeslide">
                    <p className="homeslide_title">Yearly Box Office</p>
                    <HomeSlide />
                    <div className="home_sourcediv">
                        <img className="home_sourceimg" alt="" src={Kofic} />
                        <img className="home_sourceimg" alt="" src={Mojo} /><br />
                        <img className="home_sourceimg" alt="" src={Naver} />
                        <img className="home_sourceimg" alt="" src={Tomato} /><br />
                        <img className="home_sourceimg" alt="" src={Meta} />
                    </div>
                </div>
                <div className="home_chart">
                    <div style={{ display: 'flex' }}>
                        <p className="home_charttitle">주간 박스오피스</p>
                        <p className="home_chartday">&emsp;{lastlast_sunday} ~ {last_sunday}</p>
                    </div>
                    <br />
                    <RankWeekly />
                </div>
                <div className="home_chart">
                    <div style={{ display: 'flex' }}>
                        <p className="home_charttitle">일간 박스오피스</p>
                        <p className="home_chartday">&emsp;{yesterday}</p>
                    </div>
                    <br />
                    <RankDaily />
                </div>
            </div>
        </div>
    );
}

export default Home;