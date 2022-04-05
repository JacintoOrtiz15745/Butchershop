import {StyleSheet} from 'react-native'
import { colors } from '../utils/Constants'

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    backgroundColor: colors.grayMain,
  }, 
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.white,
  },
})