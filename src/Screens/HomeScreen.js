import React,{useEffect} from 'react';
import {useLazyQuery} from '@apollo/client'
import { GET_ALL_CHARACTERS} from '../GraphQl/Query'
import CharecterCard from '../Components/CharecterCard';
import './HomeScreen.scss';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


const HomeScreen = () => {
    // const [citySearched, setcitySearched] = useState("")
    
    const [getCharecters, {loading, error , data}] = useLazyQuery(GET_ALL_CHARACTERS, {
        variables : { page : 1}
    })
    
    // useEffect(()=>{
    //     if(data){
    //         getCharecters();
    //         console.log(data);
    //     }
    // },[data])

    if(error) return <h1>Error Found</h1>
    // if(data) {
    //     console.log(data)
    // }

    useEffect(() => {
        getCharecters()
    }, [])


    return (
        <div className="charecterCard">
            {loading ? <Spin indicator={antIcon} /> : (
                <>
                    <ul className="cards">
                        <CharecterCard data={data} />   
                    </ul>
                </>
            )}
        </div>
    )
}

export default HomeScreen
