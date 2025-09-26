import React from "react";
class ChildComponent extends React.Component {
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
        console.log('>>> check props: ', this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age } = this.props

        return (
            <>
                <div>Child Component name: {name} - {age}</div>

            </>
        )
    }
}
export default ChildComponent;