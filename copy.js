var AWS = require('aws-sdk');
var async = require('async');
var bucketName = 'dhaarani-dst-bucket-01234';

const s3 = new AWS.S3({
    accessKeyId: "AKIAXWJR6YVTTKTVYEOA",
    secretAccessKey: "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"
  });
// var s3 = new AWS.S3({params: {Bucket: bucketName}, region: 'us-west-2'});

copy_source = {
        Bucket: "dhaarani-dst-bucket-01234", 
        CopySource: "dhaarani-src-bucket-56789/helloe_world.txt", 
        Key: "helloe_world"
    }
s3.copyObject(copy_source,function(err, data) {
        if (err) console.log("sss"); // an error occurred
        else     console.log("success");           // successful response
      });
      