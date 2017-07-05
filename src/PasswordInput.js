import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import InputView from './InputView';
import Keyboard from './Keyboard';

class PasswordInput extends PureComponent {

  static defaultProps = {
    length: 6,
    clear: true,
  }

  state = { visible: false, password: '' }

  show() {
    if (this.props.clear && this.state.password) {
      this.setState({ password: '' });
    }
    this.setState({ visible: true })
  }

  hide() {
    this.setState({ visible: false })
  }

  conectText(text) {
    let nextPassword = this.state.password + text;
    if (nextPassword.length > this.props.length) return null;
    this.setState({ password: nextPassword });
    if (nextPassword.length === this.props.length) {
      this.props.onDone && this.props.onDone(nextPassword);
      this.hide();
    };
  }

  onDelete() {
    let password = this.state.password;
    this.setState({ password: password.substring(0, password.length - 1) });
  }

  render() {
    const { onDone, ...rest } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => { this.show() }} activeOpacity={0.6}>
          <InputView index={this.state.password.length} {...rest} />
        </TouchableOpacity>
        <Modal animationType={'slide'} visible={this.state.visible} onRequestClose={() => { this.hide() }} transparent>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.hide() }} activeOpacity={1}>
            <Keyboard style={styles.keyborad} onPress={(text) => { this.conectText(text) }} onDelete={() => { this.onDelete() }} />
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