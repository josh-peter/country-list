import React from 'react'
import axios from "axios"
import Countries from '../Component/Countries'

export default class Axios extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: [],
      }
    }

    componentDidMount() {
        const API_URL = 'https://restcountries.com/v3.1/all'

        axios.get(API_URL).then((response) => {
            const { data } = response
            console.log("2. response", data)
            this.setState({
            data: data,
            }, console.log("3. current state", this.state.data));
            console.log("1. default state", this.state.data);
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
        <div>
            <div className= "countries">
                <Countries countries = {this.state.data}/>
            </div>
        </div>
                
        )
    }
}
    
    

