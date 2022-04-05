import {StyleSheet} from 'react-native'
import { colors } from '../utils/Constants'

export const styles = StyleSheet.create({
  textPassword: {
    fontSize: 12,
    fontWeight: '400',
    paddingBottom: 4,
    color: colors.grayMain,
  },
  mainContainerPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    borderRadius: 2,
    backgroundColor: colors.inputColor,
  },
  inputPassword: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 24,
  },
  hidePassword: {
    height: 24,
    width: 24,
    marginRight: 24,
  },
})