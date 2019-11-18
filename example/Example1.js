import React from 'react'
import { View, Text } from 'react-native'
import { PasswordInput } from 'react-native-pay-password';

const Example1 = () => {
  const [password, setPassword] = React.useState('');
  return (
    <View>
      <Text style={{ textAlign: 'center', marginBottom: 15 }}>{password}</Text>
      <PasswordInput
        onDone={(p) => { setPassword(p); }}
      />
    </View>
  )
}

export default Example1;
