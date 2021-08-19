import React,{useState, useEffect} from 'react';
import {useLazyQuery} from '@apollo/client'
import { GET_ALL_CHARACTERS} from '../GraphQl/Query'
import CharecterCard from '../Components/CharecterCard';
import './HomeScreen.scss';
import { Spin , Pagination , BackTop } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


const HomeScreen = () => {
    const [charecter, setCharecter] = useState(null)
    const [page, setPage] = useState(1);
    const [getCharecters, {loading, error , data}] = useLazyQuery(GET_ALL_CHARACTERS, {
        variables : { page : page}
    })

    useEffect(() => {
        if(data){
            setCharecter(data?.characters.results)
        }else{
            getCharecters();
        }
    }, [data , charecter , page])
    
  
    if(error) return <h1>Error Found</h1>
    // if(data) {
    //     console.log(data)
    // }


    const handlePaginationChange = (e) => {
        console.log(e);
        setPage(e)
    }

 


    return (
        <div className="charecterCard">
            {loading ? <Spin indicator={antIcon} /> : ""}
            {charecter ? (
                <>
                    <ul className="cards">
                        <CharecterCard charecter={charecter} />   
                    </ul>
                </>
            ) : (
                <h1>No data Available</h1>
            )}
            <div className="pagination">
                <Pagination onChange={handlePaginationChange} defaultCurrent={1} total={50} /> 
            </div>
            <BackTop />
        </div>
    )
}

export default HomeScreen
