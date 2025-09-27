import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = { //state dùng để lưu giá trị tức thời

        arrJobs: [
            {
                id: 'abcJob1',
                title: 'devaloper',
                salary: '500'
            },
            {
                id: 'abcJob2',
                title: 'tester',
                salary: '400'
            },
            {
                id: 'abcJob3',
                title: 'Project Managers',
                salary: '1000'
            }
        ]
    }
    /* 
    JSX   
    */

    handleSubmit = (event) => {
        event.preventDefault(); // ngăn chặn tải lại website
        console.log('>>> check data input: ', this.state);
    }
    render() {
        //console.log('>>> call render: ', this.state);
        return (
            <>
                <AddComponent />
                <div>Hello HTML FORM</div>

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />

            </>
        )
    }
}
export default MyComponent;