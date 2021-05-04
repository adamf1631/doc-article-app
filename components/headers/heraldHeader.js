import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import Logo from "../mainLogos/main-logo.png";

export default function Header() {
	return (
		<View style={styles.header}>
			<Image style={styles.mainLogo} source={Logo} alt='Catholic Star Herald' />
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: Dimensions.get("screen").width,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#b28025",
	},
	mainLogo: {
		marginTop: 20,
	},
});
