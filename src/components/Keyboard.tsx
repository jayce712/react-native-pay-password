import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  TextStyle,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
} from 'react-native';
import { constants } from '../util';

export interface KeyboardItemProps {
  value: string | ImageSourcePropType;
  type?: 'num' | 'image';
  style?: ViewStyle[];
  numStyle?: TextStyle | ImageStyle;
  onPress?: (v?: any) => void;
}

const KeyboardItem = (props: KeyboardItemProps) => {
  const {
    type = 'num',
    value,
    style = [],
    numStyle,
    onPress = () => { },
  } = props;

  return (
    <TouchableHighlight
      style={[styles.keyboardItem, ...style]}
      underlayColor={'#f5f5f5'}
      onPress={onPress}
    >
      {type === 'num'
        ? <Text style={[styles.text, numStyle as TextStyle]}>
          {value}
        </Text>
        : <Image
          source={value as ImageSourcePropType}
          resizeMode={'contain'}
          style={[styles.image, numStyle as ImageStyle]}
        />
      }
    </TouchableHighlight>
  );
};

const DATA_SOURCES: (KeyboardItemProps[])[] = [
  [{
    type: 'num',
    value: '1',
  }, {
    type: 'num',
    value: '2',
  }, {
    type: 'num',
    value: '3',
  }],
  [{
    type: 'num',
    value: '4',
  }, {
    type: 'num',
    value: '5',
  }, {
    type: 'num',
    value: '6',
  }],
  [{
    type: 'num',
    value: '7',
  }, {
    type: 'num',
    value: '8',
  }, {
    type: 'num',
    value: '9',
  }],
  [{
    type: 'num',
    value: '',
  }, {
    type: 'num',
    value: '0',
  }, {
    type: 'image',
    value: require('../images/delete.png'),
  }]
];

export interface KeyboardProps {
  /** custom data sources,cover the default keyboard */
  dataSources?: (KeyboardItemProps[])[];
  /** handler called when press num text */
  onPress?: (v?: string) => void;
  /** handler called when press delete image */
  onDelete?: () => void;
  /** keyboard style */
  style?: ViewStyle;
  /** row style */
  rowStyle?: ViewStyle;
}

const Keyboard = (props: KeyboardProps) => {

  const onPress = (item: KeyboardItemProps) => {
    if (item.onPress) {
      item.onPress(item.value);
      return;
    }
    if (item.type === 'num') {
      props.onPress && props.onPress(item.value as string);
    } else {
      props.onDelete && props.onDelete();
    }
  };

  return (
    <View style={[styles.keyboardView, props.style]}>
      {(props.dataSources || DATA_SOURCES).map((items, i) => {
        return (
          <View style={[styles.itemView, props.rowStyle]} key={i}>
            {items.map((item, j) => {
              const withBorder = Math.round(items.length / 2) === j + 1;
              return (
                <KeyboardItem
                  key={`${i}-${j}`}
                  type={item.type}
                  value={item.value}
                  style={[withBorder ? styles.border : {}, item.numStyle || {}]}
                  onPress={() => { onPress(item); }}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardView: {
    width: Dimensions.get('window').width,
  },
  itemView: {
    flexDirection: 'row',
    borderTopWidth: constants.borderWidth,
    borderTopColor: constants.borderColor,
  },
  keyboardItem: {
    flex: 1,
    height: 46,
    backgroundColor: '#feffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderLeftWidth: constants.borderWidth,
    borderLeftColor: constants.borderColor,
    borderRightWidth: constants.borderWidth,
    borderRightColor: constants.borderColor,
  },
  text: {
    fontSize: 22,
    color: '#333333'
  },
  image: {
    height: 30,
    width: 30,
  }
});

export default Keyboard;