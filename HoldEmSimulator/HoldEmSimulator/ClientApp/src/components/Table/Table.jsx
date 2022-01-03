import React from 'react';
import Card from '../Card/Card';
import { CardMapper, SuitMapper, GetRandomInt } from '../Card/Constants.js'
import './Table.css';

const calculateProbability = async (ev) => {
    ev.preventDefault();

    const hand = getCardsByClassName('div.grid-my-cards');
    const boardCards = getCardsByClassName('div.grid-container');

    const totalPlayers = document.querySelector('#total-players > select').value;

    if (!Number(totalPlayers)) {
        document.getElementById('validation-message').hidden = false;
        console.log("return")
        return;
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hand: hand, boardCards: boardCards, totalPlayers: totalPlayers })
    }

    const response = await fetch('oddsprobability', requestOptions);
    const data = await response.json();

    let element = document.getElementById("probability");
    document.getElementById('validation-message').hidden = true;
    element.innerHTML = `${data} %`;
}

const getCardsByClassName = (className) => {
    return [...document.querySelectorAll(`${className} > div.grid-item`)]
        .map(x =>
            [...new Set(x.innerText.replaceAll('\n', ''))]
                .join(''))
        .map(x => JSON.parse(`{"rank": "${x.substring(0, x.length - 1)}", "suit": "${x.slice(x.length - 1)}"}`));
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

            <div className='row'>
                <div className="grid-my-cards">
                    <Card rank={CardMapper[GetRandomInt(13)]} suit={SuitMapper[GetRandomInt(4)]} />
                    <Card rank={CardMapper[GetRandomInt(13)]} suit={SuitMapper[GetRandomInt(4)]} />
                </div>
                <div id="total-players">
                    <select className="form-control">
                        <option defaultValue>Select total players</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <span id='validation-message' hidden>Please select a valid number.</span>
                </div>
            </div>
            <br /><br />

            <div className='row'>
                <button type="button" className="btn btn-primary btn-sm" onClick={calculateProbability}>Calculate probability</button>
                <span id='probability'></span>
            </div>
        </>
    )
}

export default Table;