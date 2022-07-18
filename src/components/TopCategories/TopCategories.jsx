import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from "react-slick";

import './topCategories.css';

const TopCategories = () => {
    const [categories, setCategories] = useState([]);



    useEffect(() => {
        fetch('./categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, []);


     // ====================
     const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <div className='topCategories-section'>
            <Slider {...settings} > 
            {
                categories.map((categori) => {
                    const {id, title} = categori;
                    return (
                        <span key={id}> {title} </span> 
                    )
                })
            }
            </Slider>
        </div>
    );
};

export default TopCategories;