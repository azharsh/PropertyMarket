
import React , { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  FlatList,
  TouchableHighlight,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';



const HomeScreen = ({ navigation }) => {

    const [text, setText] = useState('');

    var property =   [
        {
            key: 'Green Lake',
            img: 'https://static-id.lamudi.com/static/media/cXVhbGl0eS83MA%3D%3D/2x2x2x700x340/29216b0a25cbc8.jpg',
            price: 'Rp 327 Juta'
        },
        {
            key: 'Kalibata City',
            img: 'https://asset.kompas.com/crops/rFCYbdP6GH_KyJwc3BidJG7ALcc=/0x0:2630x1753/750x500/data/photo/2019/06/01/1905591455.jpg',
            price: 'Rp 328 Juta'
        },
        {
            key: 'Mediteria Garden',
            img: 'https://jendela360.com/gallery/district/5b9a127b8fc1c.jpg',
            price: 'Rp 850 Juta'
        },
        {
            key: 'Hamptons Park',
            img: 'https://d3p0bla3numw14.cloudfront.net/news-content/img/2018/05/11102849/JP-Apartment.jpg',
            price: 'Rp 1.7 Miliar'
        },
        {
            key: 'SherWood',
            img: 'https://photosrp.dotproperty.id/2.0-ID-407636-PP-2691083-3791296125acad688821f4-1-490-325-ct1530670135/apartemen-dijual-dengan-2-kamar-tidur-di-bangunharjo-jawa-tengah.jpg',
            price: 'Rp 2.8 Miliar'
        },
        {
            key: 'The Peak',
            img: 'https://www.monicaanggen.com/wp-content/uploads/2020/02/3-Apartemen-di-Jakarta-yang-Bisa-Dijadikan-Pilihan-Staycation-e1582841353261.jpg',
            price: 'Rp 5.5 Miliar'
        },
    ]



    return (
        <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>   
            {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
            )}
            <View style={styles.body}>

            <Text style={styles.title}>SpaceStock</Text>
            
            <View style={styles.btnSort} >
            <Button
              onPress={()=>{
                property = property.sort(function(a, b) {
                    return a.name - b.name;
                 });

              }}
             title="sort">Sort</Button>
            </View>


            <TextInput
                    style={{height: 40, marginLeft:20}}
                    placeholder="Filter "
                    onChangeText={text => {
                        setText(text)
                        property = property.filter(x => String(x.name).includes(text));
                    }}
                    defaultValue={text}
            />
          

            <View style={styles.container}>

                <FlatList      
                data={property}
                renderItem={({item}) => 
                <View 
                style={styles.card}>
                    <TouchableHighlight
                     onPress={() =>
                        navigation.navigate('Detail', { name: item.key, price: item.price, img: item.img })
                      }
                    >
                        <View>
                        <Image source={{uri: item.img}}
                        style={{ height: 100}} />
                        <Text style={styles.item}>{item.key}</Text>
                        <Text style={styles.item}>{item.price}</Text>
                        </View>
                    </TouchableHighlight>
                   
                </View>
                }
                />
            </View>
        
            </View>
            </ScrollView>
        </SafeAreaView>
        </View>
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

   },
   btnSort:{
       margin:12,
       padding:12
    
   }
});

export default HomeScreen;