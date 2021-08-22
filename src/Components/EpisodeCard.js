import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import "./EpisodeCard.scss";

const EpisodeCard = ({episodes}) => {
    const params = {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        }
      }

    return (
        <>
            {
                episodes.map((epi)=>{
                    return(
                        <>
                            <li key={epi.id} className="card-list">
                                <div className="left">
                                    <p className="name">{epi.name}</p>
                                    <p className="episode">{epi.episode}</p>
                                    <p className="air">{epi.air_date}</p>
                                </div>
                                <div className="right">
                                    <Swiper {...params}>
                                        {epi.characters.map((char)=>{
                                            return(
                                                <div><img src={char.image} alt="" /></div>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                                {/* <div>
                                </div> */}
                            </li>
                        </>
                    )
                })
            }
        
        </>
    )
}

export default EpisodeCard
