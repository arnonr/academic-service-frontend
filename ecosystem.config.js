module.exports = {
    apps: [
      {
        name: 'SERVICE-FRONTEND',
        port: '4008',
        exec_mode: 'cluster',
        instances: 4,
        script: './.output/server/index.mjs'
      } 
    ]
  }