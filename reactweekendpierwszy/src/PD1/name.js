import React from 'react';

export default class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usersurname: '',
            sex: '',
            age: null,
            errormessage: '',
            errormessagename: '',
            errormessagename2:'',
            errormessagesex:''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        let err2 = '';
        let err3 = '';
        let err4 = '';

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
                err2 = <strong>Your name must be at least 2 digits long and start with capital letter!</strong>;
            }
            this.setState({errormessagename: err2});
        }
        this.setState({[nam]: val});

        var n = val.length;
        if (nam === "usersurname") {
            if (val !="" && n<2) {
                err3 = <strong>Your surname must be at least 2 digits long and start with capital letter!</strong>;
            }
            this.setState({errormessagename2: err3});
        }
        this.setState({[nam]: val});

        var n = val.length;
        if (nam === "sex") {
            if (val !="" && val !="male" && val !="female" ) {
                err4 = <strong>Your sex must be male or female</strong>;
            }
            this.setState({errormessagesex: err4});
        }
        this.setState({[nam]: val});

    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.usersurname} aged {this.state.age}. You are {this.state.sex}.</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                {this.state.errormessagename}

                <p>Enter your surname:</p>
                <input
                    type='text'
                    name='usersurname'
                    onChange={this.myChangeHandler}
                />
                {this.state.errormessagename2}

                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                {this.state.errormessage}

                <p>Enter your sex:</p>
                <input
                    type='text'
                    name='sex'
                    onChange={this.myChangeHandler}
                />
                {this.state.errormessagesex}

            </form>
        );
    }
}