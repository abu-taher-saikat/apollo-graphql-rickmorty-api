import React,{useEffect} from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import Tilt from "react-parallax-tilt";
import AOS from 'aos';
import "aos/dist/aos.css";
import 'swiper/swiper.scss';
import "./EpisodeCard.scss";

const EpisodeCard = ({episodes}) => {
    const params = {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 300,
            disableOnInteraction: false
          },
        breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            }
        }
      }


      useEffect(()=>{
        AOS.init();
        AOS.refresh();
      },[])

    return (
        <>
            {
                episodes.map((epi)=>{
                    return(
                        <>
                            <div 
                                data-aos="zoom-in-up" 
                                data-aos-duration="1200"
                                className="episodeCards">
                                <li key={epi.id} className="card-list">
                                    <div className="left">
                                        <Tilt>
                                            <p className="name">{epi.name}</p>
                                        </Tilt>
                                        <p className="episode">{epi.episode}</p>
                                        <p className="air">{epi.air_date}</p>
                                        <div className="countChars">{epi.characters.length} Characters Are in this episode => </div>
                                    </div>

                                    <div className="right">
                                        <Swiper {...params}>
                                            {epi.characters.map((char)=>{
                                                return(
                                                    <Link to={`character/${char.id}`}><img src={char.image} alt="" /></Link>
                                                )
                                            })}
                                        </Swiper>
                                    </div>
                                    {/* <div>
                                    </div> */}
                                </li>
                            </div>

                        </>
                    )
                })
            }
        
        </>
    )
}

export default EpisodeCard
