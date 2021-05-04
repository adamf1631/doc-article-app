import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import Logo from "../mainLogos/charitiesLogo.png";

export default function Header({ title }) {
	return (
		<View style={styles.header}>
			<Image style={styles.mainLogo} source={Logo} alt='Catholic Charities' />
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: Dimensions.get("screen").width,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
	},
	mainLogo: {
		marginTop: 20,
	},
});
