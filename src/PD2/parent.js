import React from "react";
import NestedInParent from "./nestedInParent";

export default class Parent extends React.Component {
    render() {
        const author =  {name: "John", surname: "Rambo"};
        return(
            <div>
                <NestedInParent display={author}/>
            </div>
        );
    }
}