// SnowGlobeComponent.js
import React from 'react';
import '../SnowGlobe.css';
import {LinearGradient} from 'react-text-gradients'

const SnowGlobe = ({number}) => {
    return (
        <div className="canvas">
            <div className="shadow"></div>
            <div className="base"></div>
            <div className="bowl">
                {/* Snowflakes */}
                {[...Array(60)].map((_, index) => (
                    <div key={index} className="snowflake"></div>
                ))}
                <div className="snow"></div>
                <div className="ground"></div>
                <div style={{width: '100%'}} className="text-alignment">
                    <LinearGradient gradient={['to bottom', '#c5dbec ,#adabee']}>
                        {number}
                    </LinearGradient></div>
                <div className="something"></div>
            </div>
            <div className="bowl">
                <div className="reflection"></div>
            </div>
            <div className="base"></div>

        </div>

    );
};

export default SnowGlobe;
