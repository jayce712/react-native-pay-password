import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
} from 'react-native';
import deleteImg from './delete.png';

class Keyboard extends PureComponent {

  static defaultProps = {
    onPress: () => { },
    onDelete: () => { }
  }

  renderItem(text) {
    return (
      <TouchableHighlight style={styles.item} onPress={() => { this.props.onPress(text) }} underlayColor={'#F5F5F5'}>
        <Text style={styles.text}>{text}</Text>
      </TouchableHighlight>
    )
  }

  renderDelete() {
    return (
      <TouchableHighlight style={styles.item} onPress={() => { this.props.onDelete() }} underlayColor={'#F5F5F5'}>
        <Image source={deleteImg} resizeMode={'contain'} style={{ height: 40 }} />
      </TouchableHighlight>
    )
  }

  render() {
    const { style } = this.props;
    return (
      <View style={[styles.keyboardView, style]}>
        <View style={styles.itemView}>
          {this.renderItem('1')}
          {this.renderItem('2')}
          {this.renderItem('3')}
        </View>
        <View style={styles.itemView}>
          {this.renderItem('4')}
          {this.renderItem('5')}
          {this.renderItem('6')}
        </View>
        <View style={styles.itemView}>
          {this.renderItem('7')}
          {this.renderItem('8')}
          {this.renderItem('9')}
        </View>
        <View style={styles.itemView}>
          <View style={styles.item} />
          {this.renderItem('0')}
          {this.renderDelete()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyboardView: {
    width: Dimensions.get('window').width,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.5,
    borderColor: '#C7C7C7'
  },
  itemView: {
    height: 60,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#C7C7C7'
  },
  text: {
    fontSize: 23,
    color: '#333333'
  }
})

export default Keyboard;