import React, {Component} from "react";
import './Example.css';
import Header1 from "./Header1";
import Header2 from "./Header2";

class Example extends Component{
    render(){
        return(
            <div>
                <Header1 />
                <Header2 />
                hehe
            </div>
        )
    }
}

export default Example;