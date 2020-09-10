import React from 'react';

import { Cards, Picker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Picker handleCountryChange={this.handleCountryChange}/>
      </div>
    )
  }
}

export default App;
