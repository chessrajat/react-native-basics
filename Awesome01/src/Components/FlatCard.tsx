import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.colorWhite}>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text style={styles.colorWhite}>Green</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.colorWhite}>Blue</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.colorWhite}>Blue</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 100,
    width: 100,
    margin: 10,
  },
  card1: {
    backgroundColor: '#EF5354',
  },
  card2: {
    backgroundColor: '#50DBB4',
  },
  card3: {
    backgroundColor: '#5DA3FA',
  },
  colorWhite: {
    color: 'white',
    fontWeight: 'bold',
  },
});
