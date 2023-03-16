import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
class ListTodo extends React.Component {

    state = {
        listTodo: [
            { id: '1', title: 'awake' },
            { id: '2', title: 'horn*' },
            { id: '3', title: 'clean' },
        ],
        editTodo: {}
    }

    addTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success("Wow so easy!");
    }
    deleteTodo = (todo) => {
        let currentTodo = this.state.listTodo
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodo: currentTodo
        })
        toast.success("Deleted Successfully !")
    }

    editTodo = (todo) => {
        let { editTodo, listTodo } = this.state;
        let isEmptyObject = Object.keys(editTodo).length === 0;
        if (isEmptyObject === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodo];
            let objectIndex = listTodoCopy.findIndex((item => item.id === todo.id))
            listTodoCopy[objectIndex].title = editTodo.title;
            this.setState({
                listTodo: listTodoCopy,
                editTodo: ``
            })
            toast(`Edited successfully`)
            return;
        }
        this.setState({
            editTodo: todo

        })
    }
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodo, editTodo } = this.state

        let isEmptyObject = Object.keys(editTodo).length === 0;
        return (
            <>
                <div className="list-todo-container">List To do
                    <AddTodo addTodo={this.addTodo} />
                    <div className="list-todo-content">
                        {listTodo && listTodo.length > 0 &&
                            listTodo.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObject === true ?
                                            <span> {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span> {index + 1} - {item.title} </span>
                                                }
                                            </>
                                        }
                                        <button className="edit"
                                            onClick={() => this.editTodo(item)}>
                                            {isEmptyObject === false && editTodo.id === item.id ?
                                                `Save` : `Edit`
                                            }
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.deleteTodo(item)}>
                                            Delete
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )

    }
}

export default ListTodo;