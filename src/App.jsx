import React, { Component } from 'react'
import './style.css'
export default class App extends Component {
    render() {
        return (
            <div className='wrapper'>

                <h1>Counter</h1>
                <p>counter : <span>0</span> </p>

                <div className="button-container">
                    <button>increment</button>
                    <button>decrement</button>
                </div>

            </div>

        )
    }
}



