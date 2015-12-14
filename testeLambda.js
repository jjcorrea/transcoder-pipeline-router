var aws = require('aws-sdk');
var elastictranscoder = new aws.ElasticTranscoder();

exports.handler = function(event, context) {
    console.log('Atualizado.');
    console.log('Received event:', JSON.stringify(event, null, 2));
    var files =  event.files;
    var counter = 0;
    files.forEach(function(file){
        var params = {
            Input: {
                Key: file['input-name']
            },
            PipelineId: '1449840700236-g1wzfy',
            Outputs: [
                {
                    Key: file['output-name'],
                    PresetId: '1351620000001-200055'
                }
            ]
        };
        elastictranscoder.createJob(params, function(err, data) {
            if (err){
                console.log(err, err.stack);
                ctx.fail(err);
                return;
            }
            console.log("transcoding sent - data: " + JSON.stringify(data));
            counter += 1;
            if (counter == files.length){
                context.succeed("all transcoding jobs were sent!");
            }
        });
    });
};