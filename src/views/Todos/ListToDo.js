import React from "react";
import './ListToDo.scss'
class ListToDo extends React.Component {
    state = {
        ListToDos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' },
        ]
    }

    render() {
        let { ListToDos } = this.state;


        return (
            <>
                <div className="list-todo-container">
                    <div className="add-todo">
                        <input type="text" />
                        <button type="button">Add </button>
                    </div>
                    <div className="list-todo-content">
                        {ListToDos && ListToDos.length > 0 &&
                            ListToDos.map((item, index) => {
                                return (
                                    <div className="toDo-child" key={item.id}>
                                        <span> {index + 1} - {item.title}</span>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button>
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
export default ListToDo;