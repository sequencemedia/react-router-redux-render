require('@babel/register')

const {
  getReactDOMServerRenderToString,
  getReactDOMServerRenderToStaticMarkup
} = require('./react-dom-server.jsx')

module.exports.getReactDOMServerRenderToString = getReactDOMServerRenderToString
module.exports.getReactDOMServerRenderToStaticMarkup = getReactDOMServerRenderToStaticMarkup
