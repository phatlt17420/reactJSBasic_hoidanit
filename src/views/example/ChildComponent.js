import React from "react";
class ChildComponent extends React.Component {
    // state = { //state dùng để lưu giá trị tức thời
    //     firstName: '',
    //     lastName: ''
    // }
    /*
    JSX
    */
    // handleChangeFirstName = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // handleChangeLastName = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // handleSubmit = (event) => {
    //     event.preventDefault(); // ngăn chặn tải lại website
    //     console.log('>>> check data input: ', this.state);
    // }
    state = {
        showJobs: false,

    }
    handleShowHide = (status) => {
        this.setState({
            showJobs: !this.state.showJobs,
        })
    }
    render() {
        console.log('>>> check props: ', this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs=true' : 'showJobs=false';
        console.log('>>> check conditional: ', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => { this.handleShowHide() }}>Show </button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title}  -{item.salary}
                                        </div>
                                    )
                                })


                            }



                        </div>
                        <div> <button onClick={() => { this.handleShowHide() }}>Hide </button> </div>
                    </>}
            </>
        )
    }
}
// const ChildComponent = (props) => {

//     console.log('>>> check child Props', props)
//     let { name, age, address, arrJobs } = props;
//     return (
//         <div className="job-list">
//             {
//                 arrJobs.map((item, index) => {
//                     if (item.salary >= 500) {
//                         return (
//                             <div key={item.id}>
//                                 {item.title}-{item.salary} $
//                             </div>
//                         )
//                     }


//                 })
//             }
//         </div>
//     )
// }



export default ChildComponent;