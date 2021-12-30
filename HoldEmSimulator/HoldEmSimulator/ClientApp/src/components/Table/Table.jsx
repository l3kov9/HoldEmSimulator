import React from 'react';
import Card from '../Card/Card';
import { CardMapper, SuitMapper, GetRandomInt } from '../Card/Constants.js'
import './Table.css';

const calculateProbability = async (ev) => {
    ev.preventDefault();

    let element = document.getElementById("probability");
    element.innerHTML = "0 %";

    const response = await fetch('oddsprobability');
    const data = await response.json();
}

const Table = () => {
    return (
        <>
            <div className="main">
                <div className="table">
                    <div className="board">
                        <div className="grid-container">
                            <Card rank={CardMapper[GetRandomInt(13)]} suit={SuitMapper[GetRandomInt(4)]} />
                            <Card rank={CardMapper[GetRandomInt(13)]} suit={SuitMapper[GetRandomInt(4)]} />
                            <Card rank={CardMapper[GetRandomInt(13)]} suit={SuitMapper[GetRandomInt(4)]} />
                            <Card isEmpty="true" />
                            <Card isEmpty="true" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid-container">
                <Card rank={CardMapper[GetRandomInt(13)]} suit={SuitMapper[GetRandomInt(4)]} />
                <Card rank={CardMapper[GetRandomInt(13)]} suit={SuitMapper[GetRandomInt(4)]} />
            </div>
            <br />
            <div className='row'>
                <button type="button" className="btn btn-secondary btn-sm" onClick={calculateProbability}>Calculate probability</button>
                <span id='probability'></span>
            </div>
        </>
    )
}

export default Table;