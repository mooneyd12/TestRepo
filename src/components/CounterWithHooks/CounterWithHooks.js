import React, {useState} from "react";
import Button from "../Button/Button";
import CounterDisplay from "../CounterDisplay/CounterDisplay";

function CounterWithHooks() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return(
        <div className="counter">
            <h1>Counter with hooks</h1>
            <Button onClick={decrement} bgColor="red">Decrement</Button>
            <Button onClick={increment} bgColor="green">Increment</Button>
            <CounterDisplay text={`Counter value: ${counter}`} />
        </div>
    )
}

export default CounterWithHooks;