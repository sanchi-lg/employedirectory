import React, { Component } from 'react'
import axios from 'axios'


export class Addemp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "", email: "", age: "", salary: "", position: ""
        }
    }

    submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:9000/addemp", this.state)

            .then(res => {
                alert(res.data.mssg)
            })
        this.props.history.push("/")
    }

    handle = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        
    }

    render() {
        return (
            <div style={{ width: "70%", margin: "auto", marginTop: "80px" }}>
                <form className="new" onSubmit={this.submit}>
                    <fieldset style={{ padding: "5px", borderWidth: "0.1px", borderRadius: "3px" }}>
                        <legend style={{ marginTop: "10px", marginBottom: "17px", color: "blue", fontSize: "large" }}>Add Employee</legend>                   <div>
                            <label>Name</label>
                            <input type="text" name="name" onChange={this.handle} required />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" onChange={this.handle} required />
                        </div>
                        <div>
                            <label>Age</label>
                            <input type="number" name="age" onChange={this.handle} required />
                        </div>
                        <div>
                            <label>Position</label>
                            <input type="text" name="position" onChange={this.handle} required />
                        </div>
                        <div>
                            <label>Salary</label>
                            <input type="number" name="salary" onChange={this.handle} required />
                        </div>
                        <button>Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Addemp
