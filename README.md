### react-native-pay-password

> 仿支付宝支付密码输入框

#### Install
```
$ npm install react-native-pay-password --save
```

#### Usage

> 共导出4个组件，其中`PasswordInput`和`PasswordModal`这两个组件已能满足大部分使用情况。需要定制化的时候请使用`InputView`和`Keyboard`两个组件搭配使用。

- PasswordInput(基于InputView和Keyboard)

```
import { PasswordInput } from 'react-native-pay-password';
``` 

| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| onDone   | 支付密码输入后的回调   | Function | -  |
| clear    | 打开键盘时是否清空已输入   | boolean  |  true  |
| length    | 支付密码的长度   | number  |  6  |
| borderColor   | 支付密码显示框的边框颜色    | string |  #C7C7C7  |
| style    | 支付密码显示框的样式   | ViewProperties |  -  |
| textStyle    | 支付密码圆点`●`的样式   | TextProperties |  -  |


- PasswordModal(基于InputView和Keyboard)

```
import { PasswordModal } from 'react-native-pay-password';
``` 

| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| onDone   | 支付密码输入后的回调   | Function | -  |
| clear    | 打开键盘时是否清空已输入   | boolean  |  true  |
| backdrop    | 打开modal页面是否显示遮罩层   | boolean  |  true  |
| height    | 打开modal页面的高度   | number  |  400  |
| title    | modal页面的标题   | string  |  请输入支付密码  |
| length    | 支付密码的长度   | number  |  6  |
| borderColor   | 支付密码显示框的边框颜色    | string |  #C7C7C7  |
| style    | 支付密码显示框的样式   | ViewProperties |  -  |
| textStyle    | 支付密码圆点`●`的样式   | TextProperties |  -  |


- InputView(支付密码显示框)

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


- Keyboard(支付密码键盘)

```
import { Keyboard } from 'react-native-pay-password';
```

| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| onPress    | 按下数字`0~9`的回调   |  Function |    |
| onDelete   | 按下`删除键`的回调   | Function | -  |
| rerender   | 该组件是否重新渲染    | boolean | true  |