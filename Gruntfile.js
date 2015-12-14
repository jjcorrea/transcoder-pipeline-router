var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
    lambda_invoke: {
        default: {
            options: {
                file_name: 'testeLambda.js'
            }
        }
    },
    lambda_deploy: {
        default: {
            //function: 'pipeline_router',
            function: 'testeLambda',
            options: {
                timeout : 10,
                memory: 256
            },
            arn: 'arn:aws:lambda:us-east-1:052341555783:function:testeLambda'
        }
    },
    lambda_package: {
        default: {
        }
    }
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy'])