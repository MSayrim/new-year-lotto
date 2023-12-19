// src/App.js
import React from 'react';
import {useEffect, useState, useRef} from 'react';
import './App.css';
import LotteryMachineComponent from './components/LotterMachine';
import ListOfWinners from "./components/ListOfWinners";
import {Col, Row} from "antd";
import Snowfall from "react-snowfall";
import tree from "./assets/yil_basi_agaci.png";
import gifts from "./assets/hediye_paketleri.png"
import kafein from "./assets/kafein_logo.svg"
import snow from "./assets/kar_arkaplan.png"
import SnowMan from "./components/SnowMan";
import christmasTree from "./assets/christmastree.png";
import gifts02 from "./assets/hediyelerin-paketleri.png";

import jingleAudio from "../src/assets/audio/jingle-bells-last.wav";



function App() {
    useEffect(() => {
        const audioElement = new Audio(jingleAudio);
        audioElement.loop = true;
    
        const playAudio = () => {
            audioElement.play().then(() => {}).catch(error => {});
        };
        playAudio();
    
        return () => {
            audioElement.pause();
            audioElement.currentTime = 0;
        };
    }, []);
    
    

    return (
        // <Row className="App">
        //     <Col span={10}><LotteryMachineComponent/></Col>
        //     <img src={kafein} alt="Kafain Logo"  style={{ width: '4.5%', height: 'auto',position:"fixed", left: '85.8%',top:'9%', zIndex:-200}} />
        //     <Snowfall style={{position:"fixed"}}  snowflakeCount={2000}/>
        //     <img src={tree} alt="Christmas Tree" style={{ width: '60%', height: 'auto',position:"fixed", left: '-26%', zIndex:-100 }} />
        //     <img src={gifts} alt="Christmas Gifts" style={{ width: '35%', height: 'auto',position:"fixed", right:'-2%', bottom:'-1%', zIndex:-100}} />
        //     <img src={snow} alt="Christmas Gifts" style={{ width: '100%', height: 'auto',position:"fixed", right:'-2%', bottom:'-1%', zIndex:-120}} />
        //     <SnowMan />
        // </Row>

        <div className='row'>
            <div className='col-3 tree'><img src={christmasTree} alt="Christmas Tree" /></div>
            <div className='col-12 snow-floor'><img src={snow} alt="Christmas Gifts" /></div>
            {/* <div className='col-6 offset-3 d-flex justify-content-center welcome-year-text'><p className='welcome-text'>HOŞGELDİN </p> <br/> <p className='year-text'>2024</p> </div> */}
            <div className='col-3 offset-9 gifts'>
                <div className='d-block'>
                    <div><img className='logo-img' src={kafein} alt="Kafain Logo" /></div>
                    <div><img className='gifts-img' src={gifts02} alt="Christmas Gifts" /></div>
                </div>
            </div>
            <div className='col-3 offset-2'><LotteryMachineComponent /></div>
            <Snowfall style={{ position: "fixed" }} snowflakeCount={2000} />
            <SnowMan />
        </div>
    );
}

export default App;