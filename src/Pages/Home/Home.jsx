import { render } from '@testing-library/react';
import React from 'react';
import Slider from 'react-slick';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
    };
    return (
        <div>
            <div>
                <Slider {...settings}>
                    <div>
                        <img className='w-100' src="https://free4kwallpapers.com/uploads/originals/2020/04/06/abstract-nature-art-wallpaper.jpg" alt="Nuture-img" />
                    </div>
                    <div>
                        <img className='w-100' src="https://free4kwallpapers.com/uploads/originals/2020/04/06/abstract-nature-art-wallpaper.jpg" alt="Nuture-img" />
                    </div>
                    <div>
                        <img className='w-100' src="https://free4kwallpapers.com/uploads/originals/2020/04/06/abstract-nature-art-wallpaper.jpg" alt="Nuture-img" />
                    </div>
                    <div>
                        <img className='w-100' src="https://free4kwallpapers.com/uploads/originals/2020/04/06/abstract-nature-art-wallpaper.jpg" alt="Nuture-img" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Home;