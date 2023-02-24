import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_960_720.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Agra</Text>
          <Text style={styles.cardDescription}>
            The Taj Mahal is an ivory-white marble mausoleum on the south bank
            of the Yamuna river in the Indian city of Agra. It was commissioned
            in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to
            1658), to house the tomb of his favourite wife, Mumtaz Mahal.
          </Text>
          <Text style={styles.cardFooter}>2 Hours away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  card: {
    width: 360,
    height: 400,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  cardElevated: {
    backgroundColor: '#F2F3F5',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 8,
  },
  cardBody: {
    paddingHorizontal: 8,
    flex: 1,
    flexGrow: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 4,
  },
  cardLabel: {
    paddingLeft: 2,
    color: '#A9A9A9',
    marginBottom: 10,
  },
  cardDescription: {
    marginBottom: 12,
    fontSize: 12,
  },
  cardFooter: {
    fontWeight: 'bold',
  },
});
