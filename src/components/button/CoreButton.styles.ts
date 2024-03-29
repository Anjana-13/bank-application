import {StyleSheet} from 'react-native';
import { color } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        alignItems: 'center',
        borderWidth: 1.5,
        marginHorizontal: 20,
        paddingVertical: 15,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        color: color.defaultTheme.palette.black,
    },
    disabledPrimaryButton: {
        backgroundColor: '#B8B8B8',
        borderColor : '#B8B8B8'
    },
    primaryButton: {
        backgroundColor: '#304FFE',
        borderColor : '#304FFE'
    },
    disabledSecondaryButton: {
        backgroundColor: '#FFFFFF66',
        borderColor: '#5065d9',
    },
    secondaryButton: {
        backgroundColor: '#FFFFFF',
        borderColor : '#304FFE'
    },
    disabledPrimaryText:{
        color: '#414141'
    },
    primaryText: {
        color: '#FFFFFF'
    },
    disabledSecondaryText: {
        color: '#5065d9'
    },
    secondaryText: {
        color: '#304FFE'
    },


})