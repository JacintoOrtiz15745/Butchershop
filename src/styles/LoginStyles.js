import {StyleSheet} from 'react-native';
import { colors } from '../utils/Constants';

export const styles = StyleSheet.create({
    mainContainer : {
        flex: 1,
        padding: 24, 
        backgroundColor: colors.white,
    },
    loginText: {
        fontSize: 28, 
        fontWeight: '400',
        marginTop: '30%',
        color: colors.grayMain,
        fontFamily: 'Roboto',
    },
    welcomeText: {
        fontSize: 14, 
        fontWeight: '400',
        marginBottom: 85,
        color: colors.grayMain,
        fontFamily: 'Roboto',
    },
    textMail: {
        fontSize: 12, 
        fontWeight: '400',
        paddingBottom: 4,
        color: colors.grayMain,
        fontFamily: 'Roboto',

    },
    inputMail: {
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
        height: 12, 
        width: 24, 
        marginRight: 24,
    },
    forgotText: {
        fontSize: 14,
        fontWeight: '400',
        paddingTop: 11,
        paddingBottom: 29, 
        alignSelf: 'flex-end', 
        color: colors.grayMain,
    },
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
        fontWeight:'700', 
        color: colors.white, 
    },
    signUpContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',  
        alignItems: 'flex-end', 
        marginBottom: '10%',
    },
    dontHaveAccountText: {
        fontSize: 16, 
        fontWeight: '400',
        color: colors.grayMain,
    },
    signUpTextContainer: {
        marginLeft: 5,
        fontSize: 16,  
        fontWeight: 'bold',
        color: colors.grayMain,
    },
});