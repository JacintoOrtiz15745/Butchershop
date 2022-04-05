import {StyleSheet} from 'react-native'
import { colors } from '../utils/Constants'

export const styles = StyleSheet.create({  
  textMail: {
    fontSize: 12,
    fontWeight: '400',
    paddingBottom: 4,
    color: colors.grayMain,
    fontFamily: 'Roboto',
  },
  inputStyle: {
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 24,
    width: '100%',
    height: 48,
    borderRadius: 2,
    borderColor: 'black',
    marginBottom: 21,
    backgroundColor: colors.inputColor,
  },
})