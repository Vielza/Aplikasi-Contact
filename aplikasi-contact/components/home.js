import React, { useState, useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, TextInput, useColorScheme } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const contacts = [
  { id: '1', name: 'Tanaya', phone: '256856498', photo: require('../assets/naya.jpg') },
  { id: '2', name: 'Delinda M.P', phone: '65486879543', photo: require('../assets/delin.jpg') },
  { id: '3', name: 'Ilyasa Nuy', phone: '549823125', photo: require('../assets/Ilyasa.jpg') },
  { id: '4', name: 'Arya Krismawan', phone: '4568235', photo: require('../assets/arya.jpg') },
  { id: '5', name: 'Ghani Edytia.O', phone: '4846512', photo: require('../assets/Ghani.jpg') },
  { id: '6', name: 'Gerie P.S', phone: '65486215648', photo: require('../assets/geri.jpg') },
  { id: '7', name: 'Eneng Rahayu', phone: '548634846512', photo: require('../assets/ayu.jpg') },
  { id: '8', name: 'Rani', phone: '4846512789543', photo: require('../assets/rani.jpg') },
  { id: '9', name: 'Dika n Aus', phone: '546879543', photo: require('../assets/dika.jpg') },
];

const Home = ({ navigation, route }) => {
  const { toggleTheme, isDarkTheme } = route.params;
  const [search, setSearch] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Contact List',
      headerRight: () => (
        <Icon
          name={isDarkTheme ? "md-sunny" : "md-moon"}
          size={24}
          color={isDarkTheme ? "yellow" : "gray"}
          onPress={toggleTheme}
          style={{ marginRight: 10 }}
        />
      ),
    });
  }, [navigation, isDarkTheme]);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = contacts.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredContacts(newData);
    } else {
      setFilteredContacts(contacts);
    }
  };

  return (
    <View style={[styles.container, isDarkTheme ? styles.containerDark : styles.containerLight]}>
      <TextInput
        style={[styles.searchBar, isDarkTheme ? styles.searchBarDark : styles.searchBarLight]}
        placeholder="Search Contacts"
        placeholderTextColor={isDarkTheme ? '#888' : '#666'}
        value={search}
        onChangeText={(text) => handleSearch(text)}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { contact: item })}>
            <Card style={[styles.card, isDarkTheme ? styles.cardDark : styles.cardLight]}>
              <Card.Title
                title={item.name}
                subtitle={item.phone}
                left={(props) => <Avatar.Image {...props} source={item.photo} size={50} />}
              />
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  containerLight: {
    backgroundColor: '#f8f8f8',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  searchBar: {
    height: 40,
    borderRadius: 8,
    paddingLeft: 10,
    margin: 10,
  },
  searchBarLight: {
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  searchBarDark: {
    borderColor: '#333',
    borderWidth: 1,
    backgroundColor: '#222',
  },
  card: {
    margin: 10,
    borderRadius: 8,
  },
  cardLight: {
    backgroundColor: '#fff',
    elevation: 3,
  },
  cardDark: {
    backgroundColor: '#333',
    elevation: 3,
  },
});

export default Home;
