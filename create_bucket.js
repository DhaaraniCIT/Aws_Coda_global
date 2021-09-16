const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: "AKIAXWJR6YVTTKTVYEOA",
  secretAccessKey: "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"
});

var params={
    Bucket: "dhaarani-dst-bucket-01234"
}

s3.createBucket(params,function(err,data){
    if(err) console.log(err, err.stack)
    else console.log("Sucess")
})
