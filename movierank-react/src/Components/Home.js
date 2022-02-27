import React from 'react';
import HomeSlide from './HomeSlide';
import WeeklyChart from './WeeklyChart';
import './List.css';
import './Home.css';

function Home(image) {
    return (
        <div className="list_div">
            <div className="home_div">
                <div>
                    <HomeSlide />
                </div>
                <div className="home_weeklychart">
                    <p>주간 박스오피스</p>
                    <WeeklyChart />
                </div>
            </div>
        </div>
    );
}

export default Home;