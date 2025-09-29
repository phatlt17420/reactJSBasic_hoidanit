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
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    handleSubmit = (event) => {
        event.preventDefault(); // ngăn chặn tải lại website
        console.log('>>> check data input: ', this.state);
    }
    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run did update', 'prev state', prevState, 'current state: ', this.state)
    }
    componentDidMount() {
        console.log('>>>run component did mount')
    }

    render() {
        //console.log('>>> call render: ', this.state);
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <div>Hello HTML FORM</div>

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    handleOnClickDelete={this.deleteAJob}
                />

            </>
        )
    }
}
export default MyComponent;