import React, { Component } from 'react';
import instagram from "../../data/instagram.json";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    centerMode: true,
    centerPadding: 0,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }
    ]
}
class Galleryslider extends Component {
    render() {
        return (
            <div className="sigma_instagram style-1 insta-images">
                <Slider {...settings} className="sigma_instagram-slider">
                    {/* Data */}
                    {instagram.map((item, i) => (
                        <Link to="/doctor-grid" key={i}>
                            <img src={process.env.PUBLIC_URL + "/" + item.image} alt="img" />
                        </Link>
                    ))}
                    {/* Data */}
                </Slider>
            </div>
        );
    }
}

export default Galleryslider;