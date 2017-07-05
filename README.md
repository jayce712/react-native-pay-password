### react-native-pay-password

> 

#### Install
```
$ npm install react-native-pay-password --save
```

#### Usage

> 

- 支付密码显示框

```
import { InputView } from 'react-native-pay-password';
```

| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| length    | 支付密码的长度   | number  |  6  |
| index   | 当前输入的位置   | number | -  |
| borderColor   | 支付密码显示框的边框颜色    | string |  #C7C7C7  |
| style    | 支付密码显示框的样式   | ViewProperties |  -  |
| textStyle    | 支付密码圆点`●`的样式   | TextProperties |  -  |


- 支付密码键盘

```
import { InputView } from 'react-native-pay-password';
```

| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| onPress    | 按下数字`0~9`的回调方法   |  Function |    |
| onDelete   | 按下删除键的回调方法   | Function | -  |
| rerender   | 该组件是否重新渲染    | boolean | true  |