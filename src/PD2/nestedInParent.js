import React from "react";
import LowestChild from "./lowestChild";

export default class NestedInParent extends React.Component {
    render() {
        return(
            <div>
                <p> (nestedInParent) Imię: {this.props.display.name}, Nazwisko: {this.props.display.surname}</p>
                <LowestChild displayToLowest={this.props.display}/>
            </div>
        );
    }
}