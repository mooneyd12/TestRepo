import React from "react";
import Button from "../Button/Button";
import CounterDisplay from "../CounterDisplay/CounterDisplay";

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
    }

    Increment() {
        console.log("counter:", this.state.counter);
        this.setState({
            counter: this.state.counter + 1
        })
    }

    Decrement() {
        console.log("counter:", this.state.counter);
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render(){
        return (
            <div>
                <h1>Counter</h1>
                <Button onClick={this.Decrement} bgColor="red">Decrement</Button>
                <Button onClick={this.Increment} bgColor="green">Increment</Button>
                <CounterDisplay text={`Counter value: ${this.state.counter}`} />
            </div>
        )
    }
}

export default Counter;