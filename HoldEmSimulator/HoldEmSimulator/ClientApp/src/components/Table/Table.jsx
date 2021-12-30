import React from 'react';
import Card from '../Card/Card';
import { CardMapper, SuitMapper, GetRandomInt } from '../Card/Constants.js'
import './Table.css';

const calculateProbability = async (ev) => {
    ev.preventDefault();

    const myCards = [...document.querySelectorAll('div.grid-my-cards > div.grid-item')]
        .map(x =>
            [...new Set(x.innerText.replaceAll('\n', ''))]
                .join(''));

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ myCards: myCards })
    }

    const response = await fetch('oddsprobability', requestOptions);
    const data = await response.json();

    let element = document.getElementById("probability");
    element.innerHTML = `${data} %`;
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

            <div className="grid-my-cards">
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