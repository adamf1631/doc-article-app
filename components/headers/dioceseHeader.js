import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import Logo from "../mainLogos/dioceselogo.png";

export default function Header({ title }) {
	return (
		<View style={styles.header}>
			<Image
				style={styles.mainLogo}
				source={Logo}
				alt='The Diocese of Camden'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: Dimensions.get("screen").width,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#214076",
	},
	mainLogo: {
		marginTop: 20,
	},
});
