import React from "react";

class MyComponent extends React.Component {
    state = {
        firstName: 'Miku',
        lastName: 'Hatsune'
    }
    handleOnChangeName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    render() {
        let name = 'Miku';
        return (
            <>
                <div className="miku">
                    <input value={this.state.firstName} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Seno {this.state.firstName}
                </div>
                <div className="hatsune">
                    {console.log(this.state.lastName, name)}
                </div>
            </>
        )
    }
}

export default MyComponent;