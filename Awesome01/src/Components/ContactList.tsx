import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.HeadingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map((contact, index) => (
          <View key={contact.uid} style={styles.contact}>
            <Image source={{uri: contact.imageUrl}} style={styles.imageUrl} />
            <View style={styles.contactTextContainer}>
              <Text style={styles.name}>{contact.name}</Text>
              <Text style={styles.status}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  container: {
    padding: 10,
  },
  contact: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    marginVertical: 8,
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  imageUrl: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: 'green',
    borderWidth: 3,
  },
  contactTextContainer: {
    paddingHorizontal: 8,
  },
  name: {
    fontSize: 17,
    fontWeight: '500',
  },
  status: {},
});
