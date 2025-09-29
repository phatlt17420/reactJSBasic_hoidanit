import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        Salary: '',
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            Salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        if (!this.state.title || !this.state.Salary) {
            alert('missing require parameter')
            return;
        }
        event.preventDefault(); // ngăn chặn tải lại website
        console.log('>>> check data input: ', this.state);
        this.props.addNewJob({ id: Math.floor(Math.random() * 1001), title: this.state.title, salary: this.state.Salary });


        this.setState({
            title: '',
            Salary: ''
        })
    }
    render() {
        return (
            <>
                <div>Hello addComponent</div>
                <form>
                    <label htmlFor="fname">Job's Title:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => { this.handleChangeTitleJob(event) }}
                    />

                    <br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.Salary}
                        onChange={(event) => { this.handleChangeSalary(event) }}
                    /><br /><br />
                    <input
                        type="button"
                        value="Submit"
                        
                        onClick={(event) => { this.handleSubmit(event) }}


                    />
                </form>
            </>
        )
    }

}
export default AddComponent;