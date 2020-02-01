import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';
import Topping from './components/Topping';

class App extends React.Component {
  state = {
    crust: 'stuffed',
    size: 'medium',
    toppings: [
      { id: 1, ingredient: 'cheese', category: 'dairy' },
      { id: 2, ingredient: 'pepperoni', category: 'meat' },
      { id: 3, ingredient: 'marinara', category: 'sauce' }
    ],
    type: 'Pepperoni'
  };

  handleChange = event => {
    this.setState({ type: event.target.value });
  };

  render() {
    return (
      <div>
        <Header>
          <Title>Pizza Order Confirmation</Title>
        </Header>
        <main style={styles.main}>
          <p>Hey Jared!</p>
          <p>Thanks for your order. You will find the order details below.</p>
          <p>
            You ordered a {this.state.size} {this.state.type} pizza with{' '}
            {this.state.crust} crust.
          </p>
          <h3>Toppings:</h3>
          <ol>
            {this.state.toppings.map(topping => {
              return (
                <Topping
                  key={topping.id}
                  blah={topping.ingredient}
                  category={topping.category}
                />
              );
            })}
          </ol>
          <p>
            <strong>Total:</strong>
            <span>$10.98</span>
          </p>
          <input onChange={event => this.handleChange(event)} type='text' />
        </main>
        <Footer />
      </div>
    );
  }
}

const styles = {
  main: {
    padding: '24px'
  }
};

export default App;
