import React from "react";
import LowestLowestChild from "./lowestLowestChild";

export default class LowestChild extends React.Component {
    render() {
        return(
            <div>
                <p> (lowestChild) Imię: {this.props.displayToLowest.name}, Nazwisko: {this.props.displayToLowest.surname} </p>
                <LowestLowestChild displayToLowestLowest={this.props.displayToLowest}/>
            </div>
        );
    }
}