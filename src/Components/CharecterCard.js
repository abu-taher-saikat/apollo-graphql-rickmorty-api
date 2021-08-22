import React,{useEffect, useState} from 'react'
import './CharecterCard.scss'
import { Link } from 'react-router-dom';

const CharecterCard = ({charecter, match}) => {
    return (
        <>
            {charecter.map((char) => {
                return(
                    <li className="card-list" key={char.id}>
                        <Link to={`/character/${char.id}`} className="card">
                            <img src={char.image} className="cardImage" alt="" />
                            <div className="cardOverlay">
                                <div className="cardHeader">  
                                    <div className="cardHeader-text">
                                        <h3 className="cardTitle">{char.name}</h3>            
                                        <span>{char.gender}</span>
                                        <span>{char.species}</span>
                                        <span>{char.status}</span>
                                    </div>
                                </div>
                                <p className="cardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                            </div>
                        </Link>      
                    </li>   
                )
            })}
            <h1>no data here</h1>
        </>

    )
}

export default CharecterCard
