import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const ContactList = ({ contactList, selectedIndex }) => {
  const keyExtractor = (item, index) => index.toString();

  //selecting halkhata contacts as even record id from the original contact list

  const randomizeHalkhataContacts = contactList.filter(
    contact => contact.recordID % 2 === 0,
  );

  const renderItem = ({ item }) => (
    <ListItem>
      <Avatar
        source={{
          uri:
            'https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_27-512.png',
        }}
        rounded
        title={item.displayName[0]}
        titleStyle={{ backgroundColor: 'red' }}
        size="medium"
        icon={{ name: 'user', type: 'font-awesome' }}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        placeholderStyle={{ backgroundColor: 'red' }}
        //  containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
        //there is bug with fallback avatar in react native elements with this
        //version if avatar uri is not provided then there is n fallback icon or placeholder
      />
      <ListItem.Content>
        <ListItem.Title>{item.displayName}</ListItem.Title>
        {item.phoneNumbers.map(number => (
          <ListItem.Subtitle key={number.number}>
            {number.number}
          </ListItem.Subtitle>
        ))}
      </ListItem.Content>
      {
        //Randomize Halkhata contact tag
      }
      {item.recordID % 2 === 0 ? (
        <View style={styles.halkhataTag}>
          <Text>হালখাতা কন্টাক্ট</Text>
        </View>
      ) : null}
    </ListItem>
  );
  return (
    <View>
      <FlatList
        keyExtractor={keyExtractor}
        data={selectedIndex === 0 ? contactList : randomizeHalkhataContacts}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    //  backgroundColor: color.COLOR_GREY_TRANSP,
  },
  halkhataTag: {
    backgroundColor: '#F0E68C',
    borderRadius: 10,
    padding: 5,
  },
});
