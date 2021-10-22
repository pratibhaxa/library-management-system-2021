var express = require('express');
const bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'portfoliodb';
const cors = require('cors');

var app = express();
app.use(bodyParser.json());

app.use(cors());

app.get('/',(request,response)=>response.send('Express Server Started'))

app.post('/addBook',function(request,response){
    var varBookId = request.body.bookid;
    var varBookName = request.body.bookname;
    var varBookPrice = request.body.bookprice;
    var varBookAuthorName = request.body.bookauthorname;
    var varBookPublishedDate = request.body.bookpublisheddate;
    // var varIssuerId = request.body.issuerid;
    // var varIssuerName = request.body.issuername;
    // var varIssuerPhoneNumber = request.body.issuerphonenumber;
    // var varIssueraddress = request.body.issueraddress;
    // var varIssuerDate = request.body.issuerdate;

    mongoClient.connect(url,function(error,clientConn){
        if(error){
            console.log(error);
        }
        else{
            console.log('Succesfully connected');
            const db = clientConn.db(dbName);
            db.collection('librarymanagementsystem').insertOne({
                bookid:varBookId,
                bookname:varBookName,
                bookprice:varBookPrice,
                bookauthorname:varBookAuthorName,
                bookpublisheddate:varBookPublishedDate,
                // issuerid:varIssuerId,
                // issuername:varIssuerName,
                // issuerphonenumber:varIssuerPhoneNumber,
                // issueraddress:varIssueraddress,
                // issuerdate:varIssuerDate
            })
        }
        response.send('New Book-Issuer Inserted');
    })
})

app.listen(3001,()=>console.log('Sever Started'));