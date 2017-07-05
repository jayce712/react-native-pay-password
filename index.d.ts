import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

interface InputViewProps {
  length: number
  index: number
  borderColor?: string
  style?: ViewStyle
  textStyle?: TextStyle
}

interface KeyboardProps {
  onPress: (text: string) => {}
  onDelete: () => {}
  rerender?: boolean
}

interface PasswordInputProps extends InputViewProps {
  onDone: (text: string) => {}
  clear?: boolean
}

interface PasswordModalProps extends InputViewProps {
  onDone: (text: string) => {}
  clear?: boolean
  backdrop?: boolean
  height?: number
  title?: string
}

export class InputView extends React.PureComponent<InputViewProps, null> { }
export class Keyboard extends React.PureComponent<KeyboardProps, null> { }
export class PasswordInput extends React.PureComponent<PasswordInputProps, null> { }
export class PasswordModal extends React.PureComponent<PasswordModalProps, null> { }