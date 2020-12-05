import React from 'react';
import './GiftBox.css';
import lightlump from '../../../assets/light-lump.jpg';
import { Link, Route } from 'react-router-dom';
const GiftBox = (props) => {
    return (
        <>
        {
            props.data.map(item => {
                return (
                    <Link className="outter-box" to={`/${props.type}/view/${item._id}`} key={item._id}>
            <div className="img-box">
                <img src={lightlump} height="190" width="190"/>
            </div>
            <div className="center-text">{item.name}</div>
            <div className="center-text">{item.price}</div>
        </Link>
                )
            })
        }
        </>
    )
}

export default GiftBox;