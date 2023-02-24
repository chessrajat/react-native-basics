import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './Components/FlatCard';
import ElevatedCards from './Components/ElevatedCards';
import FancyCard from './Components/FancyCard';
import ActionCard from './Components/ActionCard';
import ContactList from './Components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <FlatCard />
        <ElevatedCards /> */}
        {/* <FancyCard /> */}
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
