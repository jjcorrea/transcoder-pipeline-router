var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
    lambda_invoke: {
        default: {
		
        }
    },
    lambda_deploy: {
        default: {
            arn: 'arn:aws:lambda:us-east-1:027396584751:function:transcodeDispatcher',
            options: {
                credentialsJSON: 'credentials.JSON'
            }
        }
    },
    lambda_package: {
        default: {
		options: {
              		include_time: false
            }
        }
    }
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy'])