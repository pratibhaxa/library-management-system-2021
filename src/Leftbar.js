import React, {Component} from "react";
import './Leftbar.css';

class Leftbar extends Component{
    render(){
        return(
            <div className='left-header-component'>
                <span className='left-header-1'>&nbsp;&nbsp;&nbsp;&nbsp;HOME</span><br/>
                <span className='left-header-2'>&nbsp;&nbsp;&nbsp;&nbsp;VIEW BOOKS</span><br/>
                <span className='left-header-3'>&nbsp;&nbsp;&nbsp;&nbsp;ADD NEW BOOK</span><br/>
                <span className='left-header-4'>&nbsp;&nbsp;&nbsp;&nbsp;CONTACT</span><br/>
            </div>
        )
    }
}

export default Leftbar;