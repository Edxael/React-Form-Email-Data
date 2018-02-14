import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import GatherComp from './app/00-gather'

class IndexComp extends Component{
    render(){
        return(
            <div>
                {/* <p> Hello again </p> */}
                <GatherComp/>
            </div>
        )
    }
}

ReactDOM.render( <IndexComp />, document.getElementById('root') )
