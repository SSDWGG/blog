---
group: pdf书籍 
title: 代码整洁之道
---

```jsx 
/**
 * inline: true
 */
import React from 'react';
import Styles from './index.module.css'


export default () => <iframe className={Styles['iframe']}  src={require('./code.pdf')}/>;
// export default () => <h1>123</h1>;
```

