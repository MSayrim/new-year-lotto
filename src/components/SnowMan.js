import React from 'react';
import "../snowman.css"


const SnowMan: React.FC = () => (
    <main style={{ width: '40%', height: 'auto', position:"fixed", right: '-10%', bottom: '9%', zIndex:-100}}>
        <div class="snowman">
            <div class="wind">
                <div class="hat-1"></div>
                <div class="hat-2"></div>
                <div class="hat-3"></div>
            </div>
            <div class="snowman-mouth-1"></div>
            <div class="snowman-mouth-2"></div>
            <div class="snowman-mouth-3"></div>
            <div class="snowman-mouth-4"></div>
            <div class="snowman-mouth-5"></div>
            <div class="snowman-button-1"></div>
            <div class="snowman-button-2"></div>
            <div class="snowman-button-3"></div>
            <div class="snowman-button-4"></div>
            <div class="head"></div>
            <div class="bottom"></div>
            <div class="right-eye"></div>
            <div class="left-eye">
                <div class="nose"></div>
            </div>
            <div class="left-arm"></div>
            <div class="left-mitten-1"></div>
            <div class="left-mitten-2"></div>
            <div class="right-arm"></div>
            <div class="right-mitten-1"></div>
            <div class="right-mitten-2"></div>
            <div class="wind">
                <div class="scarf-1"></div>
                <div class="scarf-2"></div>
                <div class="scarf-3"></div>
            </div>
        </div>

</main>
);

export default SnowMan;
