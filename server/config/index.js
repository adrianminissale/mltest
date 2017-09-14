const config = {
  local: {
    mode: 'local',
    port: 3000
  },
  staging: {
    mode: 'staging',
    port: 4000
  },
  production: {
    mode: 'production',
    port: 5000
  }
}

module.exports = function(mode) {
  return config[process.env.NODE_ENV];
}