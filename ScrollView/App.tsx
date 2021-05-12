import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, RefreshControl, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [Items, setItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
  ])
  const [DATA, setDATA] = useState([
    { title: 'Title 1', data: ['Item 1-1', 'Item 1-2'] }
  ])
  const [Refreshing, setRefreshing] = useState(false)

  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setItems([...Items, { name: 'Item 92' }]);
  //   setRefreshing(false);
  // }
  const onRefresh = () => {
    setRefreshing(true);
    const count = DATA.length + 1
    setDATA([...DATA,
    { title: 'Title ' + count, data: ['Item ' + count + '-1', 'Item ' + count + '-2'] }
    ]);
    setRefreshing(false);
  }


  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => index.toString()}
      renderSectionHeader={({ section }) => (
        <View style={styles.item} >
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.itemChild} >
          <Text style={styles.text}>{item} </Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
        />
      }
    >
    </SectionList>
    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={Items}
    //   renderItem={({ item }) => (
    //     <View style={styles.item} >
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />}
    // />
    // <ScrollView style={styles.container}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />}>
    //   {
    //     Items.map((object) => {
    //       return (
    //         <View style={styles.item} key={object.key}>
    //           <Text style={styles.text}>{object.items}</Text>
    //         </View>
    //       )
    //     })
    //   }
    //   <StatusBar style="auto" />
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
  },
  item: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 10,
    borderWidth: 2,
    borderColor: '#000000',

  },
  itemChild: {
    // backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000000',
    borderBottomWidth: 1,

    // margin: 10,

  },
});
