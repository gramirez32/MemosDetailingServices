import React from "react";
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection(){
    return (
        <div className='hero-container'>
            <video src='/videos/carwash1.mov'
            autoPlay loop muted/>
            <h1>PROFESSIONAL VEHICLE DETAILING</h1>
            {/* <p>The undisputed best!</p> */}
            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'>
                        GIVE US A CALL
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize='btn--large'>
                        WATCH TRAILER <i className='fa-solid fa-car-on' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;