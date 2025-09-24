import React from "react";
class MyComponent extends React.Component {
    state = { //state dùng để lưu giá trị tức thời
        name: "Ronaldo",
        channel: "HoiDanIT"
    }
    /* 
    JSX   
    */
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })

    }
    render() {



        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello My Component, My name is {this.state['name']}
                </div>
                <div className="second">My Youtube Channel: {this.state.channel}</div>
            </>
        )
    }
}
export default MyComponent;