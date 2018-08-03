import React from 'react';
import Perf from 'react-addons-perf';
import styles from './styles.css';

class PerfProfiler extends React.Component {
  constructor(props) {
    super(props);

    this.state = { started: false };
  }

  toggle() {
    const { started } = this.state;

    started ? Perf.stop() : Perf.start();

    this.setState({ started: !started });
  }

  printWasted() {
    const lastMeasurements = Perf.getLastMeasurements();

    Perf.printWasted(lastMeasurements);
  }

  printOperations() {
    const lastMeasurements = Perf.getLastMeasurements();

    Perf.printOperations(lastMeasurements);
  }


  render() {
    const { started } = this.state;

    return <div className="perf-profiler">
      <h1>Performance Profiler</h1>
      <button onClick={this.toggle.bind(this)}>{started ? 'Stop' : 'Start'}</button>
      <button onClick={this.printWasted.bind(this)}>Print Wasted</button>
      <button onClick={this.printOperations.bind(this)}>Print Operations</button>
    </div>;
  }
}

export default PerfProfiler;