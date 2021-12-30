import React from 'react';
import Card from '../Card/Card';
import { CardMapper, SuitMapper, GetRandomInt } from '../Card/Constants.js'
import './Table.css';

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
                            <Card isEmpty="true"/>
                            <Card isEmpty="true"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;