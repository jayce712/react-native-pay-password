# react-native-pay-password

[English](./README.md) | 中文

## Install

```bash
$ npm install react-native-pay-password --save
```

## Usage

> 共导出4个组件，如果`PasswordInput`或者`PasswordModal`不能满足你的需求，你可以使用`InputView`和`Keyboard`组合试一试。

### PasswordInput(基于InputView和Keyboard)

<img src="https://cdn.nlark.com/yuque/0/2019/gif/513836/1574087918494-320e39ef-3679-4c32-95c5-7f37b729a547.gif" width="200">

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| clear | 打开键盘时是否清空已输入的密码 | boolean | true |
| onDone | 支付密码输入完成后的回调 | (value: string) => void | - |
| inputViewProps | InputView组件props | InputViewProps | - |
| keyboardProps | Keyboard组件props | KeyboardProps | - |

### PasswordModal(基于InputView和Keyboard)

<img src="https://cdn.nlark.com/yuque/0/2019/gif/513836/1574087924373-98800ba1-a549-4447-a008-a728eb5981af.gif" width="200">

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| clear | 打开键盘时是否清空已输入的密码 | boolean | true |
| onDone | 支付密码输入完成后的回调 | (value: string) => void | - |
| backdrop | 打开modal页面是否显示遮罩层 | boolean | false |
| title | modal页面的标题 | string | 支付密码 |
| header | 自定义header | React.ReactNode | 6 |
| tip | 提示 | string | #C7C7C7 |
| tipProps | tip props | TextProps | - |
| inputViewProps | InputView组件props | InputViewProps | - |
| keyboardProps | Keyboard组件props | KeyboardProps | - |

### InputView(支付密码显示框)
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| length | 支付密码的长度 | number | 6 |
| value | value值 | string | - |
| cover | 是否遮盖输入数字 | boolean | - |
| coverText | 遮盖数字的Text | string | `●` |
| style | 支付密码显示框的样式 | ViewStyle | - |
| itemStyle | 输入item的的样式 | ViewStyle | - |
| textStyle | 遮盖文字的样式 | TextStyle | - |
| borderColor | 边框颜色 | string | #C7C7C7 |

### Keyboard(支付密码键盘)
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSources | 自定义`dataSources`属性  | (KeyboardItemProps[])[] | - |
| onPress | 按下数字`0~9`的回调 | (v?: string) => void; | - |
| onDelete | 按下`删除键`的回调 |  () => void; | - |
| style | 键盘样式 | ViewStyle | - |
| rowStyle | 键盘每行的样式 | ViewStyle | - | 

## Example
see ./example