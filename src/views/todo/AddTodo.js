import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: '',
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleClickTodo = () => {
        if (!this.state.title.trim()) {
            toast.error('Null title !')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 11),
            title: this.state.title
        }
        this.props.addTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input type='text' value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button className="btn add" type="button"
                    onClick={() => this.handleClickTodo()}
                >
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo;