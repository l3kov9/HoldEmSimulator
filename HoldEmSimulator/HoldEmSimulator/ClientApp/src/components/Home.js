import React, { Component } from 'react';
import Table from './Table/Table';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <Table />
      </>
    );
  }
}
