import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1_parent}>
        <View style={styles.view1}>
          <Text>1</Text>
        </View>
        <View style={styles.view2}>
          <Text>2</Text>
        </View>
        <View style={styles.view3}>
          <Text>3</Text>
        </View>
      </View>
      <View style={styles.view2_parent}>
        <View style={styles.view4}>
          <Text>4</Text>
        </View>
        <View style={styles.view5}>
          <Text>5</Text>
        </View>
      </View>
      <View style={styles.view3_parent}>
        <View style={styles.view6}>
          <Text>6</Text>
        </View>
        <View style={styles.view7}>
          <Text>7</Text>
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  }, 
  view1_parent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  view2_parent: {
    flex: 2,
    backgroundColor: '#FFFFFF',
  },
  view3_parent: {
    flex: 8,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row'
  },
  view1: {
    flex: 1,
    backgroundColor: '#04FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: '#FF01FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    backgroundColor: '#FFFF01',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: '#FF0100',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  view5: {
    flex: 1,
    backgroundColor: '#15FE15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: '#0100E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
