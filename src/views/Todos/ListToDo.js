import React from "react";
import './ListToDo.scss'
import { toast } from 'react-toastify';
import AddTodo from "./AddTodo";
import Color from "../HOC/Color";
class ListToDo extends React.Component {
    state = {
        ListToDos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {

        }
    }


    addNewTodo = (todo) => {
        this.setState({
            ListToDos: [...this.state.ListToDos, todo]
        })
        toast.success('Đã thêm thành công!!')
    }
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.ListToDos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            ListToDos: currentTodos
        })
        toast.success('Xoá thành công !!')

    }
    handleEditTodo = (todo) => {
        let { editTodo, ListToDos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let ListToDosCopy = [...ListToDos]
            let objIndex = ListToDosCopy.findIndex((item) => item.id === todo.id)
            ListToDosCopy[objIndex].title = editTodo.title;
            this.setState({
                ListToDos: ListToDosCopy,
                editTodo: {}
            })
            toast.success('Lưu thành công')
            return;
        }
        this.setState({
            editTodo: todo
        })


    }
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { ListToDos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>> check empty object: ', isEmptyObj)

        return (
            <>

                <p>
                    Simple toDo App
                </p>

                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {ListToDos && ListToDos.length > 0 &&
                            ListToDos.map((item, index) => {
                                return (
                                    <div className="toDo-child" key={item.id}>
                                        {isEmptyObj === true ?

                                            <span> {index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1}-<input
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnchangeEditTodo(event)

                                                            }

                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>

                                                }
                                            </>

                                        }
                                        {/* <input value={item.title} /> */}




                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >{isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                        </button>
                                        <>

                                            <button className="delete"
                                                onClick={() => this.handleDeleteTodo(item)}
                                            >Delete</button>
                                        </>

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
export default Color(ListToDo);