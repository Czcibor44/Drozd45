import React from 'react';

export default class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessage: '',
            errormessagename: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        let err2 = '';
        if (nam === "age") {
            if (val != "" && !Number(val)) {
                err = <strong>Your age must be a number!</strong>;
            }
            this.setState({errormessage: err});
        }
        this.setState({[nam]: val});

        var n = val.length;
        if (nam === "username") {
            if (val !="" && n<2) {
                err2 = <strong>Your name must be at least 2 digits long!</strong>;
            }
            this.setState({errormessagename: err2});
        }
        this.setState({[nam]: val});
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username} aged {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                {this.state.errormessagename}
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                {this.state.errormessage}
            </form>
        );
    }
}