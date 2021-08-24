import React,{useEffect, useState} from 'react'
import { useLazyQuery } from '@apollo/client'
import {GET_SINGLE_CHARACTER} from '../GraphQl/SingleQuery';
import { BackTop } from 'antd';
import AOS from 'aos';
import "aos/dist/aos.css";
import { LoadingOutlined } from '@ant-design/icons';
import './SingleCharacter.scss'
// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;




const SingleCharacter = ({match}) => {
    const [character, setCharacter] = useState(null);
    const char = character?.character;
    const episode = char?.episode;
    const id  = match.params.id;
    const [getCaracter , {loading , error, data}] = useLazyQuery(GET_SINGLE_CHARACTER, {
        variables : {id : id}
    })

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
        if(data){
            setCharacter(data)
            
            console.log(episode)
        }else{
            getCaracter()
        }
    },[data])

    if(error) return <h1>Error Found</h1>

    return (
        <div className="characterPage">
            {/* {loading ? <Spin indicator={antIcon} /> : ""} */}
            {character ? (
                <>
                    <div className="container">
                        <div className="left">
                            <img src={char.image} alt="" />
                        </div>
                        <div className="right">
                            <h1 className="charName">{char.name} (<span className="nameSpecies">{char.species}</span>) </h1>
                            {/* First Div */}
                            <div className="first_div">
                                <p className="gender"> <span>Gender :</span>{char.gender}</p>
                                {/* <p className="species"> <span>Species</span>  </p> */}
                                <p className="status"> <span>Status :</span>  {char.status}</p>
                            </div>
                            {/* Second div */}
                            <div className="second_div">
                                <p className="locationName"> <span>Location :</span>  {char.location.name}</p>
                                <p className="locationType"> <span>Type : </span> {char.location.type}</p>
                            </div>
                        </div>
                    </div>

                </>
            ) : (   
                <>
                    Character Loading...
                </>
            )}

            <h1 className="episodeHeading">You will find  <span>{char?.name} </span> Episodes on, </h1>
            <div className="episode">
                {episode ? (
                    <>
                       {episode.map((epi)=>(
                            <div
                            data-aos="zoom-in-right"
                            data-aos-duration="2000"
                                className="episode-container">
                                <div className="name">{epi.name}</div>
                                <div className="episodes">{epi.episode}</div>
                                <div className="airdate">{epi.air_date}</div>
                            </div>
                        ))} 
                    </>
                ) : (
                    <>
                        <h3>Episode Loading</h3>
                    </>
                )}
     
            </div>
            <BackTop />
        </div>
    )
}

export default SingleCharacter
