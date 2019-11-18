import React from 'react';
import {
  ViewStyle,
  Modal,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import InputView, { InputViewProps } from './InputView';
import Keyboard, { KeyboardProps } from './Keyboard';

export interface PasswordInputProps {
  /** clear password value when press the password input */
  clear?: boolean;
  /** handler called when input done */
  onDone?: (value: string) => void;
  /** password input function component props */
  inputViewProps?: Partial<InputViewProps>;
  /** keyborad function component props */
  keyboardProps?: Partial<KeyboardProps>;
}

export interface PasswordInputRef {
  show: () => void;
  hide: () => void;
}

const PasswordInput = React.forwardRef((props: PasswordInputProps, ref: React.Ref<PasswordInputRef>) => {
  const {
    onDone,
    clear = true,
    inputViewProps = {},
    keyboardProps = {},
  } = props;

  const [password, setPassword] = React.useState('');

  const [visible, setVisible] = React.useState(false);

  const combineText = (text) => {
    const len = inputViewProps.length || 6;
    let nextPassword = password + text;
    if (nextPassword.length <= len) {
      setPassword(nextPassword);
      if (nextPassword.length === len) {
        onDone && onDone(nextPassword);
        hide();
      }
    }
  };

  const onDelete = () => {
    setPassword(password.substring(0, password.length - 1));
  };

  const show = () => {
    if (clear && password) {
      setPassword('');
    }
    setVisible(true);
  };

  const hide = () => {
    setVisible(!visible);
  };

  React.useImperativeHandle(ref, () => {
    return {
      show: show,
      hide: hide,
    };
  });

  return (
    <>
      <TouchableOpacity
        onPress={show}
        activeOpacity={0.8}
      >
        <InputView  {...inputViewProps} value={password} />
      </TouchableOpacity>
      <Modal
        animationType={'slide'}
        visible={visible}
        onRequestClose={hide}
        transparent={true}
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPress={hide}
        >
          <Keyboard
            {...keyboardProps}
            onPress={combineText}
            onDelete={onDelete}
          />
        </TouchableOpacity>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
});

export default PasswordInput;
