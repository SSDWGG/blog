# css


```jsx 
/**
 * inline: true
 */
import React from 'react';
import Styles from './index.module.css'


export default () => <iframe className={Styles['iframe']}  src={require('./css.pdf')}/>;
// export default () => <h1>123</h1>;
```

