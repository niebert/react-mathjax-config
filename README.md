# `react-mathjax-config`

[![NPM version](https://badge.fury.io/js/react-mathjax.svg)](http://badge.fury.io/js/react-mathjax)

React component to display math formulas. The rendering is dependent on the availability of MathJax for the React app using `react-math-config`.
* (offline use) somewhere on the local file system (see [AppLSAC](https://en.wikiversity.org/wiki/AppLSAC)),
* (online use) by importing a MathJax installation on a remote server (CDN). In this case rendering of mathematical formula will be available if and only if the mobile device or computer has internet access. 
The main difference between the forked [`react-mathjax`](https://github.com/SamyPesse/react-mathjax) from [Samy Pesse](https://www.github.com/SamyPesse) is a configurable lanching of the [MathJax](https://www.mathjax.org/) provider setting for offline and online  

### Installation

```
$ npm i react-mathjax-config --save
```

### Usage

```js
const MathJax = require('react-mathjax-config')
MathJax.setProvider('./mathjax/MathJax.js')
const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`

module.exports = () => {
    return (
        <MathJax.Provider>
            <div>
                This is an inline math formula: <MathJax.Node inline formula={'a = b'} />
                And a block one:

                <MathJax.Node formula={tex} />
            </div>
        </MathJax.Provider>
    );
}
```

### Links
* [MathJax Homepage](https://www.mathjax.org/)
* [PanDoc Github repository including MathJax](https://www.github.com/niebert/PanDoc)
