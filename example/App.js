/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Example1 from './Example1';
import Example2 from './Example2';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Example1 />
      <Example2 />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fcfe',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
