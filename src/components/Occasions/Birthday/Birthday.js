import React, { useState, useEffect} from 'react';
import GiftBox from '../../Common/GiftBox/GiftBox';
const Birthday = ({ match }) => {
    let type, content;
    if (match.url.includes('for-her'))
    type = 'for-her';
    else 
    type = 'for-him';
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/gifts').then(res => res.json()).then(
        (result) => {
        setIsLoaded(true);    
        setItems(result);
        }, (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, [])
    if (error)
    content = <p>Error</p>
    else if (!isLoaded)
    content = <p>Loading</p>
    else if (items.items)
    content = <GiftBox  data={items.items} type={type}/>
             
    return (
        <div className="container-fluid">
        <div className="row">
            {
                content
            }
            </div>
        </div>
    )
}

export default Birthday;