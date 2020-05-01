import React from "react";

export default class LowestLowestChild extends React.Component {
    render() {
        return(
            <div>
                <p> (LowestLowestChild) Imię: {this.props.displayToLowestLowest.name}, Nazwisko: {this.props.displayToLowestLowest.surname} </p>
            </div>
        );
    }
}