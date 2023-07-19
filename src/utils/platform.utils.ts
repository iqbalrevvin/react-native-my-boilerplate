import { Platform } from 'react-native';
import Constants from '../constants';

const { OS } = Platform;

export const isAndroid = () => OS === Constants.PLATFORM.ANDROID;
export const isIOS = () => Platform.OS === Constants.PLATFORM.IOS;

export default {
    isAndroid,
    isIOS,
};
