import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-paper';
import AppStyle from '../config/styles';
const { color } = AppStyle;
const HeaderSearchButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.searchButtonContainer}>
        <Icon name="search" type="font-awesome" color={color.COLOR_WHITE} />
      </View>
    </TouchableOpacity>
  );
};

export default HeaderSearchButton;

const styles = StyleSheet.create({
  searchButtonContainer: { paddingRight: 15 },
});
