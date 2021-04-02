import { StyleSheet } from 'react-native';
import AppStyle from '../../config/styles';
import Metrics from '../../config/metrics';

const { color } = AppStyle;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.COLOR_WHITE,
    height: Metrics.screenHeight - Metrics.navBarHeight - 10,
  },
  plusButtonContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  dashBoardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.COLOR_DARK_SEPERATOR,
    height: Metrics.screenHeight - Metrics.navBarHeight - 10,
    width: Metrics.screenWidth,
  },
});

export default styles;
