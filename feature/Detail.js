import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DetailScreen = ({ navigation, route }) => {
    return (
      
        <SafeAreaView>
        <View style={styles.body}>
        <Text style={styles.title}>{route.params.name}</Text>
        <Image source={{uri: route.params.img}}
                        style={{ height: 300}}/>
        <Text style={styles.item}>{route.params.price}</Text>
        </View>
        </SafeAreaView>
   
    );
    
  };

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
      padding: 16
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    container: {
      flex: 1,
      paddingTop: 20
     },
     item: {
       padding: 4,
       fontSize: 18,
       
     },
     card:{
       margin:12
  
     },
     title:{
       margin: 12,
       fontWeight: '700',
       fontSize: 24,
       textAlign: 'center',
  
     }
  });
  





export default DetailScreen;