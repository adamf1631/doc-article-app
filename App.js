import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Dimensions,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import registerForPushNotificationsAsync from './notifications/registerForNotifications';
// import { NewArticleNotification } from './notifications/newArticleNotification';
import Articles from "./components/articles";
import DioceseArticles from "./components/dioceseArticles";
import CharitiesArticles from "./components/charitiesArticles";
import dioceseLogo from "./navLogos/dioceselogo.png";
import heraldLogo from "./navLogos/main-logo.png";
import charitiesLogo from "./navLogos/charitieslogo.png";

export default function App() {
	const [diocese, setDiocese] = useState(false);
	const [herald, setHerald] = useState(true);
	const [charities, setCharities] = useState(false);

	registerForPushNotificationsAsync();

	return (
		<>
			<View>
				{charities ? (
					<CharitiesArticles />
				) : diocese ? (
					<DioceseArticles />
				) : (
					<Articles />
				)}
			</View>
			<View style={styles.navBar}>
				<TouchableOpacity
					onPress={() => {
						setHerald(true);
						setDiocese(false);
						setCharities(false);
					}}
				>
					<Image source={heraldLogo} alt='View Star Herald Articles' />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setDiocese(true);
						setCharities(false);
						setHerald(false);
					}}
				>
					<Image source={dioceseLogo} alt='View Camden Diocese Articles' />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setCharities(true);
						setDiocese(false);
						setHerald(false);
					}}
				>
					<Image source={charitiesLogo} alt='View Camden Diocese Articles' />
				</TouchableOpacity>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	navBar: {
		width: Dimensions.get("screen").width,
		height: Dimensions.get("screen").height / 16,
		position: "absolute",
		bottom: 0,
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: "#f5f5f5",
	},
});
