import React from 'react';
import './ForHer.css';
import { Link, Route } from 'react-router-dom';
import Birthday from '../Occasions/Birthday/Birthday';
import Wedding from '../Occasions/Wedding/Wedding';
import Love from '../Occasions/Love/Love';
import ViewGift from '../../components/Common/ViewGift/ViewGift';

const ForHer = () => {
    return (
        <div>
            <div>
                <ul className="child-navbar">
                    <li className="route-link">
                        <Link to="/for-her/birthday" className="">Birthday</Link>
                    </li>
                    <li className="route-link">
                        <Link to="/for-her/wedding" className="">Wedding</Link>
                    </li>
                    <li className="route-link">
                        <Link to="/for-her/love" className="">Love & Affection</Link>
                    </li>
                </ul>
                    <Route path="/for-her/birthday" component={Birthday}/>
                    <Route path="/for-her/wedding" component={Wedding}/>
                    <Route path="/for-her/love" component={Love}/>
                    <Route path="/for-her/view/:giftNo" component={ViewGift}/>
            </div>
        </div>
    )
}

export default ForHer;