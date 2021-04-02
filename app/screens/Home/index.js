import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { Input } from 'react-native-elements';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import styles from './styles';
import PlusButton from '../../components/PlusButton';
import Dashboard from './components/Dashboard';

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Dashboard />
      </View>

      <View style={styles.plusButtonContainer}>
        <PlusButton />
      </View>
    </View>
  );
}
