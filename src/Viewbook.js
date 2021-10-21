import React, {Component} from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import './Viewbook.css';

class Viewbook extends Component{
    render(){
        return(
            <div>
                <Header1 />
                <Header2 />
            </div>
        )
    }
}

export default Viewbook;