/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
   StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
function App(): JSX.Element {
 

  return (
    <SafeAreaView style={styles.root}>
      <Text>
        hello world
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 root: {
  flex:1,
 }
});

export default App;
