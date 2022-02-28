import React from 'react';
import HomeSlide from './HomeSlide';
import WeeklyChart from './WeeklyChart';
import DailyChart from './DailyChart';
import './List.css';
import './Home.css';
import moment from 'moment';
import 'moment/locale/ko';

function Home() {
    const format = "YYYY.MM.DD";
    const last_sunday = moment().day(7).subtract(7, 'days').format(format);
    const lastlast_sunday = moment().day(7).subtract(13, 'days').format(format);
    const yesterday = moment().subtract(1, 'days').format(format);
    return (
        <div className="list_div" style={{ height: '1200px' }}>
            <div className="home_div">
                <div>
                    <HomeSlide />
                </div>
                <div className="home_chart">
                    <h1>주간 박스오피스</h1>
                    <p>{lastlast_sunday} ~ {last_sunday}</p>
                    <br />
                    <WeeklyChart />
                </div>
                <div className="home_chart">
                    <h1>일간 박스오피스</h1>
                    <p>{yesterday}</p>
                    <br />
                    <DailyChart />
                </div>
            </div>
        </div>
    );
}

export default Home;