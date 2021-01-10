import React, { useEffect, useState} from 'react';
import './Home.css';
import GiftBox from '../Common/GiftBox/GiftBox';
import axios from '../../axios';

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    let content = null;

    const getTopGifts = async () => {
        const gifts = await axios.get('/gifts/get-top-gifts/').catch(err => {
            setIsLoaded(true);
            setError(error);
            console.log('Error: ', err);
        });

        if (gifts) {
            setIsLoaded(true);    
        setItems(gifts);
        }
    }
    useEffect(() => {
        getTopGifts()
        // fetch('http://localhost:4000/gifts/get-top-gifts/').then(res => res.json()).then(
        // (result) => {
        // setIsLoaded(true);    
        // setItems(result);
        // }, (error) => {
        //     setIsLoaded(true);
        //     setError(error);
        // })
    }, []);
    if(error) {
        content = <p>Error</p>
    }
    else if (!isLoaded) {
        content = <p>Loading</p>
    }
    else if (items.items){
        content = <GiftBox data={items.items} type="highlight"/>
    }
    return (
        <div>
        <div className="home">
        </div>
        <div className="row m-0 justify-content-center">{content}</div>
        </div>
    )
}

export default Home;