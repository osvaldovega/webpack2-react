// Base on the parameter set NODE_ENV the webpack config get build
function buildConfig() {
  const deploy = process.env.NODE_ENV.replace(/\s/g, '');

  if (deploy === 'prod') {
    console.log('\n\tBuilding project for PRODUCTION...\n');
    return require('./config/prod.js');
  }
  console.log('\n\tBuilding project for DEVELOPMENT...\n');
  return require('./config/dev.js');
}

module.exports = buildConfig;
