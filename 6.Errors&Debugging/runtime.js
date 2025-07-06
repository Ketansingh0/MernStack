const runtime = () => {
  console.log('This is a runtime error');
  throw new Error('This is a runtime error');
};

module.exports = runtime;