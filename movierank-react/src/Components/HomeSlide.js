import React from 'react';
import './HomeSlide.css';
import { Carousel } from '3d-react-carousal';

function HomeSlide() {
    const slides = [
        <a href="https://youtu.be/W7edvITC9g4" target="_blank" rel="noopener noreferrer">
            <img className="homeslide_img" alt="1" src="https://movie-phinf.pstatic.net/20211215_297/1639556766975z0641_JPEG/movie_image.jpg" />
        </a>,
        <img className="homeslide_img" alt="2" src="https://movie-phinf.pstatic.net/20200103_41/1578032244761ejKMX_JPEG/movie_image.jpg" />,
        <img className="homeslide_img" alt="3" src="https://movie-phinf.pstatic.net/20190116_206/1547615429111dINWj_JPEG/movie_image.jpg" />,
        <img className="homeslide_img" alt="4" src="https://movie-phinf.pstatic.net/20201230_128/1609305001387CUHXK_JPEG/movie_image.jpg" />,
        <img className="homeslide_img" alt="5" src="https://movie-phinf.pstatic.net/20201230_252/1609304926719vwxpF_JPEG/movie_image.jpg" />,
        <img className="homeslide_img" alt="6" src="https://movie-phinf.pstatic.net/20200612_248/1591937633750Vvyr6_JPEG/movie_image.jpg" />,
        <img className="homeslide_img" alt="7" src="https://movie-phinf.pstatic.net/20150622_131/14349365467550iQnC_JPEG/movie_image.jpg" />,
        <img className="homeslide_img" alt="8" src="https://movie-phinf.pstatic.net/20140721_186/1405911310756Tt2X1_JPEG/movie_image.jpg" />,
    ]
    return (
        <div className="homeslide_div">
            <Carousel slides={slides} interval={2000} arrows={true} />
        </div>
    );
}
export default HomeSlide;