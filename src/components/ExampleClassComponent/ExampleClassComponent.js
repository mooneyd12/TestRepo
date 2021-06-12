import React from "react";

class ExampleClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }


    render(){
        return(
            <div>
                <h1>Hellooooo</h1>
                <p>Today's date is {this.state.date.toLocaleDateString()}</p>
            </div>
        )
    }
}

export default ExampleClassComponent;