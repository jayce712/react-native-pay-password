import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import InputView from './InputView';
import Keyboard from './Keyboard';
import close from './close.png';

class PasswordModal extends PureComponent {

  static defaultProps = {
    length: 6,
    clear: true,
    backdrop: false,
    title: '请输入支付密码'
  }

  state = { visible: false, password: '' }
  timer = null;

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

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
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.props.onDone && this.props.onDone(nextPassword);
        this.hide();
      }, 50);
    };
  }

  onDelete() {
    let password = this.state.password;
    this.setState({ password: password.substring(0, password.length - 1) });
  }

  render() {
    const { backdrop, height, title, onDone, ...rest } = this.props;
    return (
      <Modal animationType={'slide'} visible={this.state.visible} onRequestClose={() => { this.hide() }} transparent>
        <View style={[styles.container, { backgroundColor: backdrop ? 'rgba(0,0,0,0.3)' : 'transparent' }]}>
          <View style={{ height: height || 400, backgroundColor: '#F5F5F5' }}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.close} onPress={() => { this.hide() }}>
                <Image source={close} style={{ height: 25, width: 25 }} resizeMode={'stretch'} />
              </TouchableOpacity>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.center}>
              <InputView index={this.state.password.length} {...rest} />
            </View>
            <Keyboard onPress={(text) => { this.conectText(text) }} onDelete={() => { this.onDelete() }} />
          </View>
        </View>
      </Modal >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  header: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C7C7C7'
  },
  close: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 60,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    color: '#333333'
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default PasswordModal;