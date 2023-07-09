import React, { Component } from 'react';
import banner from "../../../data/banner.json";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    centerMode: true,
    centerPadding: 0,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                dots: true
            }
        }
    ]
};
class Banner extends Component {
    render() {
        return (
            <div className="sigma_banner style-8">
                <Slider {...settings} className="sigma_banner-slider">
                    {/* Data */}
                    {banner.map((item, i) => (
                        <div key={i}>
                            <div className="banner-slider-inner bg-center bg-cover secondary-overlay" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.image + ")" }}>
                                <div className="sigma_banner-text text-center">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <h5 className="text-white">{item.subtitle}</h5>
                                                <h1 className="title text-white" dangerouslySetInnerHTML={{ __html: item.title }} />
                                                <div className="banner-links d-flex align-items-center justify-content-center">
                                                    <Link to="/doctor-grid" className="sigma_btn">
                                                        Find A Doctor
                                                        <i className="fal fa-plus ml-3 d-none d-sm-inline-block" />
                                                    </Link>
                                                    <Link to="/about" className="sigma_btn light ml-4">
                                                        About Us
                                                        <i className="fal fa-plus ml-3 d-none d-sm-inline-block" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Data */}
                </Slider>
            </div>
        );
    }
}

export default Banner;