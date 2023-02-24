import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

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
  elevated: {
    backgroundColor: '#CAD5E2',
    elevation: 2,
  },
});
