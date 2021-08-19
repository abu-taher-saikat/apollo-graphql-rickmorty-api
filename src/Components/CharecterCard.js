import React from 'react'
import './CharecterCard.scss'

const CharecterCard = ({characters}) => {
    return (
        <li className="card-list">
            console.log(characters)
            <a href="" className="card">
                <img src="https://i.imgur.com/oYiTqum.jpg" className="cardImage" alt="" />
                <div className="cardOverlay">
                    <div className="cardHeader">                   
                        <div className="cardHeader-text">
                            <h3 className="cardTitle">Jessica Parker</h3>            
                            <span className="cardStatus">1 hour ago</span>
                        </div>
                    </div>
                    <p className="cardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
            </a>      
        </li>   

    )
}

export default CharecterCard
