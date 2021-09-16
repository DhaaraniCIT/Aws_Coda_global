var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIAXWJR6YVTTKTVYEOA",
    "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
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