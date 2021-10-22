import axios from "axios";
import React, {Component} from "react";
import './Addbook.css';
import Header1 from "./Header1";
import Header2 from "./Header2";
import { Link } from "react-router-dom";

class Addbook extends Component{
    constructor(){
        super();
        this.state={
            bookid:null,
            bookname:null,
            bookprice:null,
            bookauthorname:null,
            bookpublisheddate:null,
            issuerid:null,
            issuername:null,
            issuerphonenumber:null,
            issueraddress:null,
            issuerdate:null,
            action:null
        }
    }
    addBook(){
        let bookObject={
            bookid:this.refs.BookId.value,
            bookname:this.refs.BookName.value,
            bookprice:this.refs.BookPrice.value,
            bookauthorname:this.refs.BookAuthorName.value,
            bookpublisheddate:this.refs.BookPublishedDate.value,
            issuerid:this.refs.IssuerId.value,
            issuername:this.refs.IssuerName.value,
            issuerphonenumber:this.refs.IssuerPhoneNumber.value,
            issueraddress:this.refs.IssuerAddress.value,
            issuerdate:this.refs.IssuerDate.value,
        }
        axios.post('http://localhost:3001/addBook',bookObject)
            .then((response)=>{
                console.log('response = '+JSON.stringify(response.data));
            })
            .catch((error)=>{
                console.log(error);
            })
        this.setState({
            bookid:null,
            bookname:null,
            bookprice:null,
            bookauthorname:null,
            bookpublisheddate:null,
            issuerid:null,
            issuername:null,
            issuerphonenumber:null,
            issueraddress:null,
            issuerdate:null,
            action:'Entered Details Added to Library'
        })
    }
    render(){
        return(
            <div>
                <Header1 />
                <Header2 />

                <div className='book-issuer-table'>
                <br/>
                <form>
                <table className='book-issuer-table'>
                    <tr>
                        <td>
                            <th className='book-detail-input-header'>
                                Enter Book Details :
                            </th>
                            <div className='book-detail-input-div'>
                                {/* BOOK DETAIL INPUT */}
                                <table className='book-detail-input-table'>
                                    <tr className='table1-tr'>
                                        <td>Enter the Book ID : </td>
                                        <td><input type='text' ref='BookId' placeholder='Book ID' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table1-tr'>
                                        <td>Enter the Book Name : &nbsp;</td>
                                        <td><input type='text' ref='BookName' placeholder='Book Name' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table1-tr'>
                                        <td>Enter Book Price : </td>
                                        <td><input type='number' ref='BookPrice' placeholder='Book Price' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table1-tr'>
                                        <td>Enter Author Name : </td>
                                        <td><input type='text' ref='BookAuthorName' placeholder='Author Name' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table1-tr'>
                                        <td>Enter Published Date : </td>
                                        <td><input type='date' ref='BookPublishedDate' placeholder='Published Date' className='input' required/></td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                        <td>
                            <th className='issuer-detail-input-header'>
                                Enter Issuer Details :
                            </th>
                            <div className='issuer-detail-input-div'>
                                {/* ISSUER DETAIL INPUT */}
                                <table className='issuer-detail-input-table'>
                                    <tr className='table2-tr'>
                                        <td>Enter the Issuer ID : </td>
                                        <td><input type='text' ref='IssuerId' placeholder='Issuer ID' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table2-tr'>
                                        <td>Enter Full Name : &nbsp;</td>
                                        <td><input type='text' ref='IssuerName' placeholder='Issuer Name' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table2-tr'>
                                        <td>Enter Phone Number : </td>
                                        <td><input type='number' ref='IssuerPhoneNumber' placeholder='Phone Number' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table2-tr'>
                                        <td>Enter Issuer Address : </td>
                                        <td><textarea type='text' ref='IssuerAddress' placeholder='Issuer Address' className='input' required/></td>
                                    </tr>
                                    <br/>
                                    <tr className='table2-tr'>
                                        <td>Enter Issued Date : </td>
                                        <td><input type='date' ref='IssuerDate' placeholder='Book Issued Date' className='input' required/></td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                </table>
                </form>

                <br/>
                {/* SUBMIT BUTTON ACTION */}
                <span className='addbook-submit-action'>{this.state.action}</span>
                <br/><br/>

                {/* SUBMIT BUTTON */}
                <div className='addbook-div'>
                    <button type='submit' onClick={()=>this.addBook()} className='addbook-button'>Add Book to Library</button>
                </div>
                <br/><br/><br/>

                </div>
            </div>
        )
    }
}

export default Addbook;






// --PREVIOUS DESIGN WITH ONLY BOOK INPUT DETAIL DIV--
//                 <table>
//                     <tr>
//                         <td>
//                             <div className='form'>
//                             <br/><br/>
//                             <table className='addbook-table'>
//                                 <tr className='table1-tr'>
//                                     <td>Enter the Book ID : </td>
//                                     <td><input type='text' ref='BookId' placeholder='Book ID' className='input'/></td>
//                                 </tr>
//                                 <br/>
//                                 <tr className='table1-tr'>
//                                     <td>Enter the Book Name : &nbsp;</td>
//                                     <td><input type='text' ref='BookName' placeholder='Book Name' className='input'/></td>
//                                 </tr>
//                                 <br/>
//                                 <tr className='table1-tr'>
//                                     <td>Enter Book Price : </td>
//                                     <td><input type='number' ref='BookPrice' placeholder='Book Price' className='input'/></td>
//                                 </tr>
//                                 <br/>
//                                 <tr className='table1-tr'>
//                                     <td>Enter Author Name : </td>
//                                     <td><input type='text' ref='BookAuthorName' placeholder='Author Name' className='input'/></td>
//                                 </tr>
//                                 <br/>
//                                 <tr className='table1-tr'>
//                                     <td>Enter Published Date : </td>
//                                     <td><input type='date' ref='BookPublishedDate' placeholder='Published Date' className='input'/></td>
//                                 </tr>

//                            </td>
//                     </tr></table>
//                     <span className='addbook-submit-action'>{this.state.action}</span>
//                     <br/><br/>
//                     <div className='addbook-div'>
//                     <button type='button' onClick={()=>this.addBook()} className='addbook-button'>Add Book to Library</button>
//                     </div>
//                     <br/><br/><br/>
//                     <br/><br/><br/>                
//                 </div>