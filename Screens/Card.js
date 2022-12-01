import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Button,
  RefreshControl,
} from 'react-native';

export default function Card() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [refresh, setRefresh] = useState(false);

  const search = e => {
    setFilter(e);
  };
  let dataSearch = data.filter(item => {
    return Object.keys(item).some(key =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase()),
    );
  });
  console.log(filter);
  let getData = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  let abc = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };
  return (
    <View style={{backgroundColor: '#ecd297', height: '100%'}}>
      <View style={styles.Header}>
        <Text style={styles.font}>Products</Text>
      </View>
      <View style={styles.contianer}>
        <TextInput
          value={filter}
          onChangeText={search.bind(this)}
          placeholder="Search Here........"
        />
      </View>
      <View>
        <ScrollView
          refreshControl={
            <RefreshControl onRefresh={abc} refreshing={refresh} />
          }>
          {dataSearch.map((j,i) => (
            <View key={i} style={styles.Card}>
              <Image style={styles.img} source={{uri: j.image}} />
              <Text style={styles.font}>Tittle: {j.title}</Text>
              <Text style={styles.font}>Price: {j.price}</Text>
              <Button title="Buy Now" color="#df743d" />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Input: {
    width: '98%',
    margin: 4,
    borderBottomColor: 'white',
    color: 'white',
  },
  font: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    borderBottomWidth: 2,
    fontSize: 25,
  },
  contianer: {
    margin: 10,
    padding: 16,
    backgroundColor: '#eab676',
    borderRadius: 30,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  Header: {
    width: '100%',
    backgroundColor: '#eab676',
    padding: 20,
  },
  Card: {
    margin: 10,
    backgroundColor: '#eab676',
    borderRadius: 10,
    padding: 12,
  },
  img: {
    width: '100%',
    height: 300,
  },
});
