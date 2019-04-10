/* @flow */
/* CDN for MathJax is used, not offline use of mathematical expressions */
import Provider from './Provider';  
/* MathJax is assumed to be installed locally as subdirectory 'mathjax/' of app  */
// import Provider from './MathJaxLocal';  
import Node from './Node';

const MathJax = {
    Provider,
    Node
};

export default MathJax;
