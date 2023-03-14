import React from "react";

class AddComponent extends React.Component {

    state = {
        id: '',
        color: ' ',
    }

    handleChangeId = (event) => {
        this.setState({
            id: event.target.value
        })
    }

    handleChangeColor = (event) => {
        this.setState({
            color: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.id || !this.state.color) {
            alert('NOT accept NULL data field')
            return;
        }
        console.log(">>>> Check input data:", this.state)
        this.props.addNewVocaloid({
            id: this.state.id,
            color: this.state.color
        })
        this.setState({
            id: '',
            color: ''
        })
    }

    render() {
        return (
            <form action="/action_page.php">
                <label htmlFor="fname">ID:</label><br />
                <input type="text" value={this.state.id}
                    onChange={(event) => this.handleChangeId(event)}
                />
                <br />
                <label htmlFor="lname">color:</label><br />
                <input type="text" value={this.state.color}
                    onChange={(event) => this.handleChangeColor(event)}
                />

                <br /><br />
                <input type="button" value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }
}

export default AddComponent