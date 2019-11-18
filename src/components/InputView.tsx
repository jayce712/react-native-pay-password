import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { constants, warn } from '../util';

export interface InputViewProps {
  /** password length */
  length?: number;
  /** password value */
  value?: string | number;
  /** cover */
  cover?: boolean;
  /** password cover text */
  coverText?: string;
  /** input view style */
  style?: ViewStyle;
  /** input item style */
  itemStyle?: ViewStyle;
  /** password text style */
  textStyle?: TextStyle;
  /** border color */
  borderColor?: ViewStyle['borderColor'];
}

const InputView = (props: InputViewProps) => {
  let {
    length = 6,
    value = '',
    style,
    itemStyle,
    cover = true,
    coverText = '●',
    textStyle,
    borderColor = constants.borderColor,
  } = props;

  const values = (value || '').toString().split('');
  if (values.length > length) {
    warn(`password value length(${values.length}) greater than input view length(${length})`);
  }

  const passwordItems: React.ReactNode[] = [];
  for (let i = 0; i < length; i++) {
    let borderRightWidth = constants.borderWidth;
    if (i === length - 1) {
      borderRightWidth = 0;
    }
    passwordItems.push(
      <View
        key={i}
        style={[styles.itemView, { borderRightWidth, borderRightColor: borderColor }, itemStyle]}
      >
        <Text style={[styles.text, textStyle]}>
          {values.length > i ? (cover ? coverText : values[i]) : ''}
        </Text>
      </View>
    );
  }

  return (
    <View
      style={[styles.inputView, { width: length * constants.inputItemWidth, borderColor: borderColor }, style]}
    >
      {passwordItems}
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    borderWidth: constants.borderWidth,
  },
  itemView: {
    height: constants.inputItemHeight,
    width: constants.inputItemWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333333'
  }
});

export default InputView;
