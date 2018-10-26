const getIP = require('./script/lib/getLocalIp')
const pkg = require('./package.json')
exports.config = {
  output: './output',
  helpers: {
    WebDriverIO: {
      host: 'localhost',
      url: `http://${getIP()}:3000`,
      browser: 'chrome',
      windowSize: '1920x1080',
      smartWait: 5000,
      restart: false,
      waitForTimeout: 10000
    }
  },
  include: {
    I: './functional/steps_file.js'
  },
  bootstrap: function(done) {
    require('./server')
    console.log(' -=-=-=-= bootstrap')
    setTimeout(() => {
      done()
    }, 5000)
  },
  teardown: function(done) {
    console.log(' -=-=-=-= teardown')
    process.exit(0)
  },
  hooks: [],
  gherkin: {},
  tests: './functional/**/**_test.js',
  timeout: 1000,
  name: `${pkg.name}-v${pkg.version}`,
  mocha: {
    reporterOptions: {
      reportDir: 'output'
    }
  }
}
