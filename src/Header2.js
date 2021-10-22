import React, {Component} from "react";
import { Link } from "react-router-dom";
import './Header2.css';

class Header2 extends Component{
    render(){
        return(
            <div className='header-component'>
                <span className='header-component-1'><Link to='/home' className='header-link'>Home</Link></span>
                <span className='header-component-3'><Link to='/addbook' className='header-link'>Enter Book - Issuer Details</Link></span>
                <span className='header-component-2'><Link to='/viewbook' className='header-link'>View Books</Link></span>
                <span className='header-component-2'><Link to='/viewissuer' className='header-link'>View Issuers</Link></span>
                <span className='header-component-4'><Link to='/contact' className='header-link'>Contact</Link></span>
                <span className='header-component-4'><Link to='/example' className='header-link'>Example</Link></span>
            </div>
        )
    }
}

export default Header2;


// &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;