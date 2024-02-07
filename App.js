import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button,SectionList } from 'react-native';
import DATA from './data.json'


export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
       // keyExtractor={(item, index) => item + index}
       // renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}

       renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 16,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#eaeaea',
    padding: 10,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
  },
});


//export default function App() {
//   return (
//     <View style={styles.container}>
//       <Image  source ={require("./assets/personimg.jpg")}
      
//       style={styles.photo}
//        resizeMode='contain'
//        />
//        <Text style={styles.id}>ID: 1234</Text>
//        <Text style={styles.name}>Name: Maneesha</Text>
//        <Text style={styles.dep}>Department: computers</Text>
//       <Button title= 'submit'/>
//       <StatusBar style="auto" /> 
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'skyblue'
//   },

// photo: {
//     width:150,
//     height:150,
//     borderRadius: 50,
//   },
//   name:{
//     fontSize:16,
//     backgroundColor:'yellow',
//     marginBottom:5,
//     fontWeight:'bold',
//   },
//   id: {
//     fontSize: 16,
//     marginBottom: 5,
//     backgroundColor:'yellow',
//     fontWeight:'bold',
//   },
//   dep: {
//     fontSize: 16,
//     backgroundColor:'yellow',
//     marginBottom:5,
//     fontWeight:'bold'
//   },
//});




 

