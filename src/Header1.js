import React, {Component} from "react";
import './Header1.css';
import icon from './lms_icon.jpeg';

class Header1 extends Component{
    render(){
        return(
            <table className='div-position'>
                <tr>
                    <td>
                        <span className='connect-icon'>linkedin mail</span>
                    </td>
                    <td>
                        <img src={icon}  className='icon'/>
                    </td>
                </tr>
            </table>
        )
    }
}

export default Header1;