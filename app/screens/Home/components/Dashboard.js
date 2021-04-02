import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppStyle from '../../../config/styles';
import Metrics from '../../../config/metrics';
import { Divider, ButtonGroup } from 'react-native-elements';

const { color } = AppStyle;

const Dashboard = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const buttons = ['বকেয়াকারী', 'পরিশোধকারী'];

  const updateIndex = _selectedIndex => {
    setSelectedIndex(_selectedIndex);
  };
  return (
    <View style={styles.dashBoardContainer}>
      <View style={styles.topStateContainer}>
        <View style={styles.leftStat}>
          <View>
            <Text style={styles.dueTitle}>মোট বকেয়াঃ</Text>
            <Text style={styles.dueAmount}>০.০০</Text>
          </View>
          <View>
            <Text style={styles.dueTitle}>মোট আদায়কৃতঃ </Text>
            <Text style={{ ...styles.dueAmount, color: color.COLOR_GREEN }}>
              ০.০০
            </Text>
          </View>
        </View>
        <View style={styles.verticalDivider}>
          <Divider
            style={{ ...styles.midDivider, width: Metrics.screenWidth / 3 }}
          />
        </View>
        <View style={styles.rightStat}>
          <Text style={styles.dueTitle}>মোট বকেয়াকারীঃ</Text>
          <Text style={{ ...styles.dueAmount, color: color.COLOR_BLACK }}>
            ০
          </Text>
        </View>
      </View>

      <View style={styles.bottomInfoContainer}>
        <View style={{ paddingLeft: 20 }}>
          <Divider style={styles.midDivider} />
        </View>
        <View style={styles.toggleContainer}>
          <View style={styles.toggleButtonContainer}>
            <ButtonGroup
              onPress={updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{ height: 30 }}
              selectedButtonStyle={{ backgroundColor: color.COLOR_GREY_TRANSP }}
            />
          </View>

          <View style={styles.toggleButtonInfo}>
            {selectedIndex === 0 ? (
              <Text>
                এই মুহুর্তে আপনার কোন বকেয়াকারী নাই, নতুন বকেয়াকারী এড করতে +
                বাটনটি চাপুন এবং প্রয়োজনীয় তথ্য পূরণ করুন ।
              </Text>
            ) : (
              <Text>
                এই মুহুর্তে আপনার কোন পরিশোধকারী নাই, নতুন পরিশোধকারী এড করতে +
                বাটনটি চাপুন এবং প্রয়োজনীয় তথ্য পূরণ করুন ।
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashBoardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.COLOR_DARK_SEPERATOR,
    height: Metrics.screenHeight - Metrics.navBarHeight - 10,
    width: Metrics.screenWidth,
  },

  topStateContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: color.COLOR_WHITE,
    height: Metrics.screenHeight / 3,
    width: Metrics.screenWidth,
  },
  leftStat: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: color.COLOR_WHITE,
  },
  rightStat: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  midDivider: {
    backgroundColor: color.COLOR_GREY,
    height: 2,
    width: Metrics.screenWidth - 40,
  },
  verticalDivider: {
    transform: [{ rotate: '90deg' }],
    flex: 0.1,
    marginBottom: 100,
    //alignSelf: 'center',
  },
  dueTitle: {
    fontSize: 16,
    color: color.COLOR_BLACK,
  },
  dueAmount: {
    fontSize: 25,
    color: color.COLOR_PRIMARY,
  },
  bottomInfoContainer: {
    flex: 1,
    backgroundColor: color.COLOR_WHITE,
    width: Metrics.screenWidth,
    // paddingLeft: 20,
  },
  toggleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    //  backgroundColor: color.COLOR_GREY_TRANSP,
  },
  toggleButtonContainer: {
    flex: 1,
    width: Metrics.screenWidth / 1.5,
  },
  toggleButtonInfo: {
    flex: 1.5,
    paddingLeft: 20,
    paddingRight: 10,
  },
});
