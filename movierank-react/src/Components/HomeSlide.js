import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomeSlide.css';

const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
};

function HomeSlide() {
    return (
        <div className="homeslide_div">
            <Slider {...settings}>
                <img alt="" src="https://movie-phinf.pstatic.net/20211215_297/1639556766975z0641_JPEG/movie_image.jpg" />
                <img alt="" src="https://movie-phinf.pstatic.net/20210820_122/1629448997924YXUCv_JPEG/movie_image.jpg" />
                <img alt="" src="https://movie-phinf.pstatic.net/20211026_97/1635213484861yCnwO_JPEG/movie_image.jpg" />
                <img alt="" src="https://movie-phinf.pstatic.net/20210617_272/1623906098516QjpeS_JPEG/movie_image.jpg" />
                <img alt="" src="https://movie-phinf.pstatic.net/20210421_37/1618971733493B4ykS_JPEG/movie_image.jpg" />
                <img alt="" src="https://movie-phinf.pstatic.net/20210726_114/1627265960693kkM0B_JPEG/movie_image.jpg" />
                <img alt="" src="https://movie-phinf.pstatic.net/20210126_174/1611638248803840HH_JPEG/movie_image.jpg" />
            </Slider>
        </div>
    );
}
export default HomeSlide;