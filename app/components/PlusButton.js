import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigationService from '../navigation/NavigationService';
import Routes from '../config/routes';

const PlusButton = () => {
  return (
    <TouchableOpacity>
      <Icon
        reverse
        raised
        name="plus"
        type="font-awesome"
        color="red"
        reverseColor="white"
        onPress={() => NavigationService.navigate(Routes.CONTACT_LIST)}
      />
    </TouchableOpacity>
  );
};

export default PlusButton;

const styles = StyleSheet.create({
  container: {
    // width: 60,
    // height: 60,
    // borderRadius: 30,
    // backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
