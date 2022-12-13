import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>JDEME ZKUSIT PRVNÍ DEPLOY</Text>
      <Text>TESTUJEME</Text>
      <Text>TESTUJEME</Text>
      <Text>TESTUJEME</Text>
      <Text>TESTUJEME</Text>
      <Text>THIS IS A STAGING! TEST 1</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0fF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
