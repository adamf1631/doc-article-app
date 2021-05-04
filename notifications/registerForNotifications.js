import Constants from 'expo-constants';
import { Notifications } from "expo";
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';

export default async function registerForPushNotificationsAsync() {
	try {
		if(Constants.isDevice){
			const { status: existingStatus } = await Notifications.getPermissionsAsync();
			let finalStatus = existingStatus;
			if(existingStatus !== 'granted') {
				const { status } = await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}
			if(finalStatus !== 'granted') {
				alert('Failed to get push token, please try again.')
				return;
			}

			const token = (await Notifications.getExpoPushTokenAsync({ experinceId })).data
			console.log(token);
			return token;
		}else{
			alert('Must use A physical device for this.')
		}

		if(Platform.OS === 'android') {
			Notifications.setNotificationChannelAsync('default', {
				name: 'default',
				importance: Notifications.AndroidImportance.MAX,
				vibrationPattern: [0, 250, 250, 250],
				lightColor: '#FF231F7C',
		})

	}
	}
	catch (e) {
		console.error({ msg:e.message })
	}
	};
