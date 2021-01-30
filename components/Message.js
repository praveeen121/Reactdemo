import { Component } from "react"
import React from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state= {
            message : 'welome visitor',
            button : 'subscribe'
        }
    }
    k 
    ChangeMessage(){
        if (this.k===1){
        this.setState ({
            
                message : 'thank you for subscribing',
                button :'unsubscribe'
            
        })
        --this.k
    }
        if (this.k===0){
            this.setState ({
                
                    message : 'thank you for subscribing',
                    button :'subscribe'
                
            })
            ++this.k
        }
    }


 render(){
     return(
            <div>
            <h2>{this.state.message}</h2>
            <button onClick={()=> this.ChangeMessage()}>{this.state.button}</button>
            </div>
    ) 
 }
}

export default Message
