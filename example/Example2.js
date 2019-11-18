import React from 'react'
import { View, Text, Button } from 'react-native'
import { PasswordModal } from 'react-native-pay-password';

const Example2 = () => {
  const [password, setPassword] = React.useState('');

  const passwordModalRef = React.createRef(null);

  return (
    <View>
      <Button
        onPress={() => { passwordModalRef.current.show() }}
        title={'open password modal'}
      >
      </Button>
      <Text style={{ textAlign: 'center' }}>{password}</Text>
      <PasswordModal
        ref={passwordModalRef}
        onDone={(p) => { setPassword(p); }}
        inputViewProps={{
          cover: false,
        }}
      />
    </View>
  )
}

export default Example2;
