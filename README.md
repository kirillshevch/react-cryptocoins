## React Cryptocoins Icons

[![npm](https://img.shields.io/npm/v/react-cryptocoins.svg)](https://www.npmjs.com/package/react-cryptocoins)

## SVG cryptocurrencies icons as React components.
Designed by [allienworks](https://github.com/allienworks/cryptocoins)

## Installation
    npm install react-cryptocoins --save

## Usage

```javascript
import { Btc } from 'react-cryptocoins';

class MyClass extends React.Component {
  render() {
    return <Btc />
  }
}
````
Or include icons from the compiled folder ./dist.
```javascript
var Btc = require('react-cryptocoins/dist/icons/btc');

var MyComponent = React.createClass({
  render: function () {
    return (
      <Btc />
    );
  }
});
```
You can also include the whole icon pack:
```javascript
import * as Icon from 'react-cryptocoins';

class MyClass extends React.Component {
  render() {
    return <Icon.Eth />
  }
}
```

Icons can be configured with inline props:
```javascript
<Icon.Eth color="red" size={48} />
```

## License

The components is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

