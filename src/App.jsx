import React, { Component } from 'react'
import './style.css'
import Counter from './components/Counter'
export default class App extends Component {

    render() {
        return (
            <>
                <Counter
                    title='Counter 1'
                />
                <Counter
                    title='Counter 2'
                />
                <Counter
                    title='Counter 3'
                />
            </>
        )
    }
}
