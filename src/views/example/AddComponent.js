import React from "react";
class AddComponent extends React.Component {
    state = {
        titleJobs: '',
        Salary: '',
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            titleJobs: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            Salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault(); // ngăn chặn tải lại website
        console.log('>>> check data input: ', this.state);
    }
    render() {
        return (
            <>
                <div>Hello addComponent</div>
                <form>
                    <label htmlFor="fname">Job's Title:</label><br />
                    <input
                        type="text"
                        value={this.state.titleJobs}
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