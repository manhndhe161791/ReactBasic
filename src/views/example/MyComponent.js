import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ' ',
        identity: [
            { id: '01', color: 'aqua' },
            { id: '02', color: 'yellow' },
            { id: '03', color: 'yellow' },
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(">>>> Check input data:", this.state)
    }

    render() {
        return (
            <>
                <div>
                    HATSUNE MIKU
                </div>
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br /><br />
                    <input type="button" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <ChildComponent name={this.state.lastName} number="01" identity={this.state.identity} />
            </>
        )
    }
}

export default MyComponent;