var aws = require('aws-sdk');
var elastictranscoder = new aws.ElasticTranscoder();

exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    var files =  event.files;
    var counter = 0;
    files.forEach(function(file){
        var params = {
            Input: {
                Key: file['relative-path'],
            },
            PipelineId: '1450444750278-tw7e41',
            OutputKeyPrefix: 'test-29/test_',
            Outputs: [
                {
                    Key: 'hls_768x432_',
                    PresetId: '1443827522116-lzwvl1',
                    SegmentDuration: '10'
                },
                {
                    Key: 'hls_416x234_',
                    PresetId: '1443827226269-j3hjhq',
                    SegmentDuration: '10'
                },
                {
                    Key: 'hls_480x270_',
                    PresetId: '1443827374277-xgzzdw',
                    SegmentDuration: '10'
                },
                {
                    Key: 'hls_640x360_',
                    PresetId: '1443827437245-ehtlmv',
                    SegmentDuration: '10'
                },
                {
                    Key: 'hls_960x540_',
                    PresetId: '1443827588644-f4me52',
                    SegmentDuration: '10'
                },
                {
                    Key: 'hls_1280x720_',
                    PresetId: '1443827656419-079ewh',
                    SegmentDuration: '10'
                },
                {
                    Key: 'hls_1920x1080_',
                    PresetId: '1443827724492-vvdyuf',
                    SegmentDuration: '10'
                },
            ],
            Playlists: [
                {
                    Format: 'HLSv3',
                    Name: 'master',
                    OutputKeys: ["hls_768x432_", "hls_416x234_", "hls_480x270_", "hls_640x360_", "hls_960x540_", "hls_1280x720_", "hls_1920x1080_"],
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





