import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        identity: [
            { id: '01', color: 'aqua' },
            { id: '02', color: 'yellow' },
            { id: '03', color: 'yellow' },
        ]
    }

    addNewVocaloid = (vocaloid) => {
        this.setState({
            identity: [...this.state.identity, vocaloid]
        })
    }

    deleteVocaloid = (vocaloid) => {
        let currentList = this.state.identity;
        currentList = currentList.filter(item => item.id !== vocaloid.id);
        this.setState({
            identity: currentList
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewVocaloid={this.addNewVocaloid}

                />
                <ChildComponent
                    identity={this.state.identity}
                    deleteVocaloid={this.deleteVocaloid}
                />
            </>
        )
    }
}

export default MyComponent;