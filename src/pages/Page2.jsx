import './List.css'
import axios from 'axios'
import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BotaoPag2 from '../components/BotaoPag2'


const List = () => {

    const [apiData, setApiData] = useState()
    const [loading, setLoading] = useState()

    const fetchApiData = useCallback(async () => {
        try {
            const {data} = await axios.get('https://digimon-api.vercel.app/api/digimon')
            setApiData(data)
        }catch(error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        fetchApiData()
    }, [])

    const renderApiData = () => {
        if (loading || !apiData?.length) {
            return (<h1> Carregando </h1>)
        } 
        return (
            <div>
                {apiData.map(name => (
                    <div className='image-list'>
                        <h5 className='image-container'><img src={name.img} /></h5>
                        <h5 className='caixa2'>Level: {name.level} </h5>
                    </div>
                ))}
            </div>
        )
    }
    

    const navigate = useNavigate()

    const navigateToPage2 = () => {
        navigate('/')
    }

    return (
        <div className='container1'> 
            <h1 className='caixa'> <strong>Treinamento dos Digimons</strong> </h1>
                <div> 
                    <BotaoPag2 />
                </div>
            {renderApiData()}
        </div>
    );
}


export default List;