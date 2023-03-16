import React from "react";
import { withRouter } from "react-router";
class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 4000);
    }

    render() {
        return (
            <>
                <div>HomePage</div>
            </>
        )
    }
}

export default withRouter(Home);