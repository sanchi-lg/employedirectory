import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export class Employeedir extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emp: [], narr: []
        }
    }


    componentDidMount() {
        axios.get("http://localhost:9000/getemp")
            .then(res => {
                this.setState({ emp: res.data, narr: res.data }, () => {

                })
            })
    }

    search = (e) => {
        const { name, value } = e.target
        this.setState({
            narr: this.state.emp.filter(e => {
                if (e.ename.toLowerCase().includes(value.toLowerCase())) {
                    return e
                }
            })
        })

    }

    render() {
        return (
            <div>
                <header>
                    <div style={{ height: "50px", marginBottom: "10px", width: "100%", background: "grey", marginTop: 0, fontWeight: "normal", fontSize: "large", color: "white", verticalAlign: "middle", display: "flex", justifyItems: "center", justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                        Employees
                   </div>
                </header>
                <div style={{ clear: "both", overflow: "auto" }}>
                    <Link to="/addemp" style={{ textDecoration: "none", height: "100%", color: "red", marginBottom: "20px", fontSize: "large", float: "right", marginRight: "8px", verticalAlign: "center" }}>Add Employee +</Link>

                </div>
                {this.state.emp.length == 0 ? <div className="empty" style={{ width: "80%", margin: "auto", marginTop: "70px" }}>
                    <div style={{ margin: "auto", textAlign: "center" }}>
                        <img src="data:image/png;base64,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" height={240} width={240} />
                    </div>
                    <h2 style={{ margin: "auto", marginTop: "30px", fontWeight: "normal", color: "blue", textAlign: "center" }}>No employee has added yet</h2>

                </div> :
                    <div className="dir" style={{ width: "70%", margin: "auto" }}>

                        <div style={{ width: "50%", margin: "auto", padding: "auto", marginTop: "16px", marginBottom: "80px" }}>
                            <input type="text" className="search" onChange={this.search} placeholder="Search" />
                        </div>
                        <ul className="emp">
                            {this.state.narr.map(e =>
                                <li>
                                    <div className="eimg">
                                        <img src="data:image/png;base64,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" height={160} width={140} />
                                    </div>
                                    <div className="edetail">
                                        <div className="ename">{e.ename}</div>
                                        <div className="eemail">{e.eemail}</div>

                                        <div className="eposition">{e.eposition}</div>
                                        <div className="esalary"> Salary  :  {e.esalary}</div>
                                        <div className="eage"> Age : {e.eage}</div>

                                    </div>
                                </li>
                            )}
                        </ul>

                    </div>}
            </div>
        )
    }
}

export default Employeedir
