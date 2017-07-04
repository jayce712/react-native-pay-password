import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import InputView from './InputView';
import Keyborad from './Keyborad';

class PasswordInput extends PureComponent {

  state = { visible: false, number: '' }

  show() {
    this.setState({ visible: true })
  }

  hide() {
    this.setState({ visible: false })
  }

  conectText(text) {
    let number = this.state.number + text;
    this.setState({ number: number });
  }



  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => { this.show() }} activeOpacity={0.6}>
          <InputView index={this.state.number.length} />
        </TouchableOpacity>
        <Modal animationType={'slide'} visible={this.state.visible} onRequestClose={() => { this.hide() }} transparent>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.hide() }} activeOpacity={1}>
            <Keyborad style={styles.keyborad} onPress={(text) => { this.conectText(text) }} />
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyborad: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
})

export default PasswordInput;