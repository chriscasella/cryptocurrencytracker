import React, {Component} from 'react';

class CurrencyList extends Component {
  constructor(props){
    super(props);
    this.state = {
      coins: ''
    }
  }

  let coins = fetch('https://www.cryptocompare.com/api/data/coinlist/')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ coins: body.data });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

  coins.forEach(function(coins))

  render () {
    return (
    )
  }
}

export default CurrencyList;
