import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  const { cyanBox, yellow, yellowBox, cyan, red, safeArea, redBox } = styles;
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={safeArea}>
          <View style={cyanBox}>
            <Text style={cyan}>Hello, React Native Cyan</Text>
          </View>
          <View style={yellowBox}>
            <Text style={yellow}>Hello, React Native yellow</Text>
          </View>
          <View style={redBox}>
            <Text style={red}>Hello, React Native Red</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    marginTop: 30,
  },
  cyanBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
    margin: 10,
    padding: 20,
  },
  yellowBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    margin: 10,
    padding: 20,
  },
  redBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    margin: 10,
    padding: 20,
  },
  red: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  yellow: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  cyan: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});
export default App;
