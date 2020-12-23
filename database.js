const Pool = require('pg').Pool

const connection = new Pool({
  user: 'gfrexfxdzvtcxl',
  host: 'ec2-54-217-206-236.eu-west-1.compute.amazonaws.com',
  database: 'dfobept1pa8mbi',
  password: '9495d1554370c3b37c989135ea6d0836c39b62c03a7ff964475d15a493dcf167',
  port: 5432,
})
module.exports = connection;