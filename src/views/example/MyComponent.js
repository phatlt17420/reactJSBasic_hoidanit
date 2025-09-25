import React from "react";
class MyComponent extends React.Component {
    state = { //state dùng để lưu giá trị tức thời
        firstName: '',
        lastName: ''
    }
    /* 
    JSX   
    */
    handleChangeFirstName = (event) => {
        this.setState({ firstName: event.target.value })
    }
    render() {
        return (
            <>
                <div>Hello HTML FORM</div>
                <form>
                    <label for="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => { this.handleChangeFirstName(event) }}
                    />

                    <br />
                    <label for="lname">Last name:</label><br />
                    <input type="text" value="" /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}
export default MyComponent;