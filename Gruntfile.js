var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
    lambda_invoke: {
        default: {
            options: {
                file_name: 'index.js'
            }
        }
    },
    lambda_deploy: {
        default: {
            arn: 'arn:aws:lambda:us-east-1:052341555783:function:testeLambda',
        }
    },
    lambda_package: {
        default: {
            options: {
            }
        }
    }
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy'])