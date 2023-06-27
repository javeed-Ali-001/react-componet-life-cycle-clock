import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: true}

  onClickToggleBtn = () => {
    this.setState(prevState => {
      const {showClock} = prevState
      return {showClock: !showClock}
    })
  }

  render() {
    const {showClock} = this.state
    const showClockClassName = showClock
      ? 'toggle-button-red'
      : 'toggle-button-green'

    return (
      <div className="app-container">
        <button
          type="button"
          className={showClockClassName}
          onClick={this.onClickToggleBtn}
        >
          {showClock ? 'Hide Clock' : 'show Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
