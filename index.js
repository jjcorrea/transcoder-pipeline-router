var aws = require('aws-sdk');
var elastictranscoder = new aws.ElasticTranscoder();

exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    var files =  event.files;
    var counter = 0;
    files.forEach(function(file){
        var params = {
            Input: {
                Key: file['input-name'],
            },
            PipelineId: '1439822635276-rcaxp4',
            OutputKeyPrefix: 'test-29/test_',
            Outputs: [
                {
                    Key: 'hls_768x432',
                    PresetId: '1443827522116-lzwvl1',
                    SegmentDuration: '10'
                },
                {
                    Key: 'hls_416x234',
                    PresetId: '1443827226269-j3hjhq',
                    SegmentDuration: '10'
                },
                {
                    Key: 'hls_480x270',
                    PresetId: '1443827374277-xgzzdw',
                    SegmentDuration: '10'
                },
                {
                    Key: 'hls_640x360',
                    PresetId: '1443827437245-ehtlmv',
                    SegmentDuration: '10'
                },
                {
                    Key: 'hls_960x540',
                    PresetId: '1443827588644-f4me52',
                    SegmentDuration: '10'
                },
                {
                    Key: 'hls_1280x720',
                    PresetId: '1443827656419-079ewh',
                    SegmentDuration: '10'
                },
                {
                    Key: 'hls_1920x1080',
                    PresetId: '1443827724492-vvdyuf',
                    SegmentDuration: '10'
                },
            ],
            Playlists: [
                {
                    Format: 'HLSv3',
                    Name: 'master',
                    OutputKeys: ["hls_768x432", "hls_416x234", "hls_480x270", "hls_640x360", "hls_960x540", "hls_1280x720", "hls_1920x1080"],
                }
            ]
        };
        elastictranscoder.createJob(params, function(err, data) {
            if (err){
                console.log(err, err.stack);
                context.fail(err);
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





