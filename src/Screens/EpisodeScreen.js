import React,{useEffect, useState} from 'react'
import {useLazyQuery} from '@apollo/client'
import { GET_ALL_EPISODES } from "../GraphQl/EpisodesQuery";
import {Pagination} from 'antd';
import './EpisodeScreen.scss';
import EpisodeCard from '../Components/EpisodeCard';



const EpisodeScreen = () => {
    const [episodes, setEpisodes] = useState(null)
    const [page, setPage] = useState(1);
    const [getEpisodes, {loading , error, data}] = useLazyQuery(GET_ALL_EPISODES, {
        variables : {page : page}
    })

    useEffect(()=>{
        if(data){
            setEpisodes(data?.episodes.results)
            console.log(episodes)
        }else{
            getEpisodes()
        }
    },[episodes , data, page]);

    const handlePaginationChange = (e) => {
        console.log(e);
        setPage(e)
    }

    if(error) return <h1>Error Found</h1>

    return (
        <div className="episodes">
            <h1 className="episodeHeading">Episodes</h1>
            {/* {data ? console.log(data) : "loading"} */}

            {episodes ? (
                <>
                {/* {console.log(episodes)} */}
                    <div className="episodeList">
                        <ul className="episodeCards">
                            <EpisodeCard episodes={episodes} />
                        </ul>
                    </div>
                    <div className="pagination">
                        <Pagination onChange={handlePaginationChange} defaultCurrent={1} total={episodes.length} /> 
                    </div>
                </>
            ) : (
                <>
                    <h1>Loading Episodes...</h1>
                </>
            )}

            
        </div>
    )
}

export default EpisodeScreen
