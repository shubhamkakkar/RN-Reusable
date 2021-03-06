import React, {useState} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import {BottomSheet} from './UI';

export default function App() {
  const [state, setstate] = useState<boolean>(false);
  function toggleState() {
    setstate(!state);
  }
  return (
    <View style={styles.container}>
      <BottomSheet headerTitle="Bottom Sheet" visible={state} onClose={toggleState}>
        <View style={styles.random}>
          <Button title="Click Me" onPress={() => setstate(!state)} />
        </View>
      </BottomSheet>
      <Button title="Click Me" onPress={() => setstate(!state)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  random: {
    marginTop: 20,
  },
});
