import React,{useEffect} from 'react'
import Tilt from "react-parallax-tilt";
import AOS from 'aos';
import "aos/dist/aos.css";
import './CharecterCard.scss'
import { Link } from 'react-router-dom';

const CharecterCard = ({charecter, match}) => {

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
      },[])

    return (
        <>
            {charecter.map((char) => {
                return(
                    <Tilt>
                        <li 
                            data-aos="zoom-in-right" 
                            data-aos-duration="1200" className="card-list" key={char.id}>
                                <Link to={`/character/${char.id}`} className="card">
                                    <div className="imageBox">
                                        <img src={char.image} className="cardImage" alt="" />

                                    </div>
                                    <div className="cardOverlay">
                                        <h3 className="cardTitle">{char.name} </h3>
                                    </div>
                                </Link>      
                        </li>   

                    </Tilt>
                )
            })}
        </>
    )
}

export default CharecterCard
