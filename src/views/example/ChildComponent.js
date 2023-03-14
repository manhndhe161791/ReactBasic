import React from "react";
import './Demo.scss';

class ChildComponent extends React.Component {
    state = {
        showIdentity: false
    }

    handleShowHide = (status) => {
        this.setState({
            showIdentity: !this.state.showIdentity
        })
    }

    handleOnClickDelete = (vocaloid) => {
        console.log('>>>> delete', vocaloid);
        this.props.deleteVocaloid(vocaloid);
    }

    render() {

        let { identity } = this.props
        let { showIdentity } = this.state
        let check = showIdentity === true ? 'showIdentity = true' : 'showIdentity = false';
        console.log('>>>> check: ', check)
        return (
            <>

                {showIdentity === false ?
                    <div>
                        <button
                            className="btn-show"
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="identity">
                            {
                                identity.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.id} - {item.color}
                                            <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div>
                            <button onClick={() => this.handleShowHide()}>
                                Hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}
// const ChildComponent = (props) => {
//     let { identity } = props
//     return (
//         <>
//             <div>
//                 {
//                     identity.map((item, index) => {
//                         if (item.id < 3) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.id} - {item.color}
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;