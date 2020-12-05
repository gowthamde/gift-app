import React, { useEffect, useState } from 'react'
import lightlump from '../../../assets/light-lump.jpg';
import './ViewGift.css';

const ViewGift = ({match}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    let content = null;

    useEffect(() => {
        fetch(`http://localhost:4000/gifts/${match.params.giftNo}`).then(res => res.json()).then((response) => {
            setIsLoaded(true);    
        setItems(response);
        console.log(items)
        }, (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, [])
    if(error) {
        content = <p>Error</p>
    }
    else if (!isLoaded) {
        content = <p>Loading</p>
    }
    else if (items.items){
        content = items.items.map((item) => {
            return (
                <div className="container view-gift mt-4" key={item._id}>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <img src={lightlump} height="300" width="300" alt="gift"/>
                        </div>
                        <div className="col-md-8">
                            <div className="f30 fbold">
                                <p className="mb-0">{item.name}</p>
                            </div>
                            <div className="f34 fbold">
                                <p className="mb-0">{item.price}</p>
                            </div>
                            <div>
                                <p>inclusive of all taxes</p>
                            </div>
                            <div className="row m-4">
                                <div className="m-4">
                                    <button className="cart-btn">Add to Cart</button>
                                </div>
                                <div className="m-4">
                                    <button className="buy-btn">Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div>
            {
                content
            }
        </div>
    )
}

export default ViewGift;