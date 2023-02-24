import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (link: string) => {
    Linking.openURL(link);
  };

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in JavaScript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_960_720.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            deserunt dolor itaque doloribus quasi in quae magni tenetur
            veritatis adipisci aut saepe possimus quos impedit enim sunt nam,
            dolores fugit.
          </Text>
        </View>
        <View style={styles.cardFooterContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.youtube.com/')}>
            <Text style={styles.cardReadMore}>Read more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  card: {
    width: 350,
    height: 340,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333333',
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 150,
  },
  cardBodyContainer: {
    padding: 10,
  },
  cardFooterContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardReadMore: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
});
