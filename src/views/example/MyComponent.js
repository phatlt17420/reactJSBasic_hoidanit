import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = { //state dùng để lưu giá trị tức thời
        firstName: '',
        lastName: ''
    }
    /* 
    JSX   
    */
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault(); // ngăn chặn tải lại website
        console.log('>>> check data input: ', this.state);
    }
    render() {
        console.log('>>> call render: ', this.state);
        return (
            <>
                <div>Hello HTML FORM</div>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => { this.handleChangeFirstName(event) }}
                    />

                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => { this.handleChangeLastName(event) }}
                    /><br /><br />
                    <input
                        type="button"
                        value="Submit"
                        onClick={(event) => { this.handleSubmit(event) }}


                    />
                </form>
                <ChildComponent
                    name={'Lê Tấn Phát'}
                    age={'33'}
                />
// props: property
            </>
        )
    }
}
export default MyComponent;