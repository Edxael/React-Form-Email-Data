import React, { Component } from 'react'

export default class extends Component{
    render(){
        return(
            <div>
               <div className="formContainer">
                   <form>
                       <h2>Provide data below:</h2>

                       <input className="dataIn" type="text" placeHolder="Full Name"/>
                       <br/><br/>

                       <input className="dataIn" type="text" placeHolder="Email"/>
                       <br/><br/>

                       <input className="dataIn" type="text" placeHolder="Phone Number."/>
                       <br/><br/>

                       <input type="submit" value="Sign Up..."/>
                       <br/><br/>
                       

                   </form>
               </div>
            </div>
        )
    }
}