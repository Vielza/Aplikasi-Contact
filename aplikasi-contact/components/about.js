import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Detail = ({ route, navigation }) => {
  const { contact } = route.params;
  const scheme = useColorScheme();

  return (
    <View style={[styles.container, scheme === 'dark' ? styles.containerDark : styles.containerLight]}>
      <Image source={contact.photo} style={styles.photo} />
      <Text style={[styles.name, scheme === 'dark' ? styles.textDark : styles.textLight]}>{contact.name}</Text>
      <Text style={[styles.phone, scheme === 'dark' ? styles.textDark : styles.textLight]}>{contact.phone}</Text>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={20} color="#fff" style={styles.goBackIcon} />
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  containerLight: {
    backgroundColor: '#f8f8f8',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phone: {
    fontSize: 18,
    color: '#666',
  },
  textLight: {
    color: '#000',
  },
  textDark: {
    color: '#fff',
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  goBackIcon: {
    marginRight: 10,
  },
  goBackButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Detail;
