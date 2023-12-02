// src/App.js
import React from 'react';
import './App.css';
import LotteryMachineComponent from './components/LotterMachine';
import ListOfWinners from "./components/ListOfWinners";
import {Col, Row} from "antd";

function App() {
    return (
        <Row className="App">
            <Col span={12}><ListOfWinners /></Col>
            <Col span={12}><LotteryMachineComponent/></Col>
        </Row>
    );
}

export default App;
