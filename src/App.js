// src/App.js
import React from 'react';
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


function App() {
    return (
        <Row className="App">
            <Col span={10}><LotteryMachineComponent/></Col>
            <Col span={14}><ListOfWinners /></Col>
            <Snowfall />
            <img src={kafein} alt="Kafain Logo"  style={{ width: '25%', height: 'auto',position:"fixed", left: '40%',top:'20%', zIndex:-200}} />
            <img src={tree} alt="Christmas Tree" style={{ width: '60%', height: 'auto',position:"fixed", left: '-26%', zIndex:-100 }} />
            <img src={gifts} alt="Christmas Gifts" style={{ width: '35%', height: 'auto',marginLeft:'1000px',marginTop:'250px' ,position:"fixed", right:'-2%', bottom:'-1%', zIndex:-100}} />
            <img src={snow} alt="Christmas Gifts" style={{ width: '100%', height: 'auto',marginLeft:'0px',marginTop:'0px' ,position:"absolute", right:'-2%', bottom:'-1%', zIndex:-120}} />
            <SnowMan />
        </Row>
    );
}

export default App;
