import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import Metrics from '../../config/metrics';
import AppStyle from '../../config/styles';
import { Divider, ButtonGroup } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements';
import ContactList from './components/ContactList';

const { color } = AppStyle;

const index = () => {
  const [contactList, setContactList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const buttons = ['সকল কন্টাক্টস', 'হালখাতা কন্টাক্টস'];

  const updateIndex = _selectedIndex => {
    setSelectedIndex(_selectedIndex);
  };

  useEffect(() => {
    const fetchContacts = async () => {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonPositive: 'Please accept bare mortal',
        },
      );
      const contacts = await Contacts.getAll();
      setContactList(contacts);
      console.log('-----------------');

      console.log(contacts);
      console.log('-----------------');
    };
    fetchContacts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.toggleButtonContainer}>
        <ButtonGroup
          onPress={updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 30 }}
          selectedButtonStyle={{ backgroundColor: color.COLOR_GREY_TRANSP }}
        />
      </View>
      <Divider style={styles.midDivider} />
      <View style={styles.contactListContainer}>
        <ContactList contactList={contactList} selectedIndex={selectedIndex} />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: color.COLOR_WHITE,
  },
  toggleButtonContainer: {
    // flex: 1,
    width: Metrics.screenWidth,
  },
  midDivider: {
    backgroundColor: color.COLOR_GREY,
    height: 1,
    width: Metrics.screenWidth - 40,
  },
  contactListContainer: {
    width: Metrics.screenWidth,
    flex: 1,
  },
});
