const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: "AKIAXWJR6YVTTKTVYEOA",
  secretAccessKey: "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"
});
var uploadParams = {Bucket: 'dhaarani-src-bucket-56789', Key: '', Body: ''};
var file = "helloe_world.txt";

// Configure the file stream and obtain the upload parameters
var fileStream = fs.createReadStream(file);
fileStream.on('error', function(err) {
  console.log('File Error', err);
});
uploadParams.Body = fileStream;
var path = require('path');
uploadParams.Key = path.basename(file);
var file;
// call S3 to retrieve upload file to specified bucket
s3.upload (uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } if (data) {
      file = data.Location
    console.log("Upload Success", data.Location);
    copy_source = {
        Bucket: "dhaarani-dst-bucket-01234", 
        CopySource: "dhaarani-src-bucket-56789/helloe_world.txt", 
        Key: "helloe_world"
    }
    s3.copyObject(copy_source,function(err, data) {
        if (err) console.log("sss"); // an error occurred
        else     console.log("success");           // successful response
      });
  }
});
let docClient = new AWS.DynamoDB.DocumentClient({
    accessKeyId: "AKIAXWJR6YVTTKTVYEOA",
    secretAccessKey: "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"
  });

let save = function () {

    var input = {
        'TransID':2,'fileName':'file_name','fileSize':'45','timeSnap':'16/09/2021,10:11'
    };
    var params = {
        TableName: "fileData",
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("users::save::success" );                      
        }
    });
}

save();