import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 4000);
    }

    render() {
        return (
            <>
                <div>HomePage</div>
            </>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);