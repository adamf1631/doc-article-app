import React from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Image,
	Linking,
} from "react-native";
import facebook from "./socialMediaIcons/facebook.png";
import insta from "./socialMediaIcons/insta.png";
import youtube from "./socialMediaIcons/youtube.png";
import twitter from "./socialMediaIcons/twitter.png";

const socialMediaBar = () => {
	return (
		<View style={styles.main}>
			<TouchableOpacity
				onPress={() =>
					Linking.openURL("https://www.facebook.com/DioceseOfCamden/")
				}
			>
				<View style={styles.logoLink}>
					<Image style={styles.imgBtn} source={facebook} />
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => Linking.openURL("https://twitter.com/camdendiocese")}
			>
				<View style={styles.logoLink}>
					<Image style={styles.imgBtn} source={twitter} />
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					Linking.openURL("https://www.youtube.com/user/CamdenDiocese")
				}
			>
				<View style={styles.logoLink}>
					<Image style={styles.imgBtn} source={youtube} />
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					Linking.openURL("https://www.instagram.com/camdendiocese/")
				}
			>
				<View style={styles.logoLink}>
					<Image style={styles.imgBtn} source={insta} />
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginVertical: 16,
		marginLeft: 8,
		marginRight: 8,
	},
	logoLink: {
		padding: 12,
		backgroundColor: "#f5f5f5",
		borderRadius: 50,
	},
	imgBtn: {
		width: 25,
		height: 25,
	},
});

export default socialMediaBar;
