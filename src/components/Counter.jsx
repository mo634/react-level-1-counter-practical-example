import React, { Component } from 'react'
import propTypes from 'prop-types'
export default class Counter extends Component {
    state = {
        counter: 0
    }

    increment = () => {
        this.setState(
            {
                counter: this.state.counter + 1
            }
        )
    }

    decrement = () => {
        // if counter value = 0 not decrement 
        if (this.state.counter <= 0) return
        this.setState(
            {
                counter: this.state.counter - 1
            }
        )
    }
    render() {
        return (
            <div className='wrapper'>

                <h1>{this.props.title}</h1>
                <p>counter : <span>{this.state.counter}</span> </p>

                <div className="button-container">
                    <button
                        onClick={this.increment}
                    >increment</button>


                    <button
                        onClick={this.decrement}
                    >decrement</button>
                </div>

            </div>

        )
    }
}

Counter.propTypes = {
    title: propTypes.string
}