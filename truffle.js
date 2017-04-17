require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    // test: {
    //   host: "localhost",
	  // gasPrice: 1,
    //   gas: 0xfffffff,
    //   port: 8545,
    //   network_id: "*" // Match any network id
    // }
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*'
    }
  }
};
