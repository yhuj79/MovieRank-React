import React from 'react';
import './HomeSlide.css';
import { Carousel } from '3d-react-carousal';

function HomeSlide() {
    const slides = [
        <a href="https://youtu.be/W7edvITC9g4" target="_blank" rel="noopener noreferrer">
            <img className="homeslide_img" alt="2021" src="https://movie-phinf.pstatic.net/20211215_297/1639556766975z0641_JPEG/movie_image.jpg" />
        </a>,
        <a href="https://youtu.be/FqyHdERatW8" target="_blank" rel="noopener noreferrer">
            <img className="homeslide_img" alt="2020" src="https://movie-phinf.pstatic.net/20200103_41/1578032244761ejKMX_JPEG/movie_image.jpg" />
        </a>,
        <a href="https://youtu.be/xM1CIQd_X4c" target="_blank" rel="noopener noreferrer">
            <img className="homeslide_img" alt="2019" src="https://movie-phinf.pstatic.net/20190116_206/1547615429111dINWj_JPEG/movie_image.jpg" />
        </a>,
        <a href="https://youtu.be/amXcMw8cJZk" target="_blank" rel="noopener noreferrer">
            <img className="homeslide_img" alt="2018" src="https://movie-phinf.pstatic.net/20201230_128/1609305001387CUHXK_JPEG/movie_image.jpg" />
        </a>,
        <a href="https://youtu.be/5O5PVvHTWRo" target="_blank" rel="noopener noreferrer">
            <img className="homeslide_img" alt="2017" src="https://movie-phinf.pstatic.net/20201230_252/1609304926719vwxpF_JPEG/movie_image.jpg" />
        </a>,
        <a href="https://youtu.be/UOTOjA0ngmk" target="_blank" rel="noopener noreferrer">
            <img className="homeslide_img" alt="2016" src="https://movie-phinf.pstatic.net/20200612_248/1591937633750Vvyr6_JPEG/movie_image.jpg" />
        </a>,
        <a href="https://youtu.be/hcKp68DtBb0" target="_blank" rel="noopener noreferrer">
            <img className="homeslide_img" alt="2015" src="https://movie-phinf.pstatic.net/20150622_131/14349365467550iQnC_JPEG/movie_image.jpg" />
        </a>,
        <a href="https://youtu.be/spQtwggaCy4" target="_blank" rel="noopener noreferrer">
            <img className="homeslide_img" alt="2014" src="https://movie-phinf.pstatic.net/20140721_186/1405911310756Tt2X1_JPEG/movie_image.jpg" />
        </a>,
        <a href="https://youtu.be/rvcN5uFf_VI" target="_blank" rel="noopener noreferrer">
            <img className="homeslide_img" alt="2013" src="https://movie-phinf.pstatic.net/20130118_115/1358472020816kP4vN_JPEG/movie_image.jpg" />
        </a>,
        <a href="https://youtu.be/seGzMn5qu2M" target="_blank" rel="noopener noreferrer">
            <img className="homeslide_img" alt="2012" src="https://movie-phinf.pstatic.net/20120718_209/1342589585791cltsr_JPEG/movie_image.jpg" />
        </a>,
    ]
    return (
        <div className="homeslide_div">
            <Carousel slides={slides} interval={2000} arrows={true} />
        </div>
    );
}
export default HomeSlide;