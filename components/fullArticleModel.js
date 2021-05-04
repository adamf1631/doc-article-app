import React, { Component, useState } from "react";
import {
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
	ScrollView,
	Dimensions,
	Image,
	TouchableOpacity,
	Linking,
} from "react-native";
import Modal from "react-native-modal";
import moment from "moment";
import HTML from "react-native-render-html";
import StarHeraldSocialMedia from "./socialMediaBars/starHeraldSocialMedia";
import DioceseSocialMedia from "./socialMediaBars/dioceseSocialMediaBar";
import CharitiesSocialMedia from "./socialMediaBars/charitiesSocialMedia";

const fullArticleModal = ({ item }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const socialMedia = () => {
		const number = item.categories;
		const dioceseCategoryNum = number.includes(278);
		const heraldCategoryNum = number.includes(17);
		const charitiesCategoryNum = number.includes(45);

		if (dioceseCategoryNum === true) {
			return <DioceseSocialMedia />;
		} else if (heraldCategoryNum === true) {
			return <StarHeraldSocialMedia />;
		} else if (charitiesCategoryNum === true) {
			return <CharitiesSocialMedia />;
		}
	};

	return (
		<View style={styles.centeredView}>
			<TouchableOpacity>
				<Modal
					animationType='slide'
					fullScreen={true}
					transparent={true}
					visible={modalVisible}
				>
					<TouchableHighlight
						style={styles.closeTop}
						onPress={() => {
							setModalVisible(!modalVisible);
						}}
					>
						<Text style={styles.topCloseBtn}>&times;</Text>
					</TouchableHighlight>
					<View>
						<View style={styles.modalView}>
							<ScrollView>
								<HTML
									html={`<h4>${item.title.rendered}</h4>` || "<h4></h4>"}
									tagsStyles={{ h4: { margin: 0, padding: 0 } }}
								/>

								<Text style={styles.posted}>
									Posted:
									{moment(item.modified).format("MMMM Do YYYY, h:mm a")} |{" "}
									{moment(item.modified).startOf("day").fromNow()}
								</Text>

								<HTML
									html={item.content.rendered || "<p></p>"}
									contentWidth={Dimensions.get("window").width - 100}
									imagesMaxWidth={Dimensions.get("window").width / 2}
									tagsStyles={{
										iframe: { width: 200 },
										figure: { width: "100%" },
									}}
									ignoredStyles={["width"]}
									onLinkPress={(event, href) => {
										Linking.openURL(href);
									}}
								/>
								<TouchableHighlight
									style={{
										...styles.openButton,
										width: 80,
										height: "auto",
										backgroundColor: "#214076",
										marginVertical: 11,
									}}
									onPress={() => {
										setModalVisible(!modalVisible);
									}}
								>
									<Text style={styles.closeBtn}>Close</Text>
								</TouchableHighlight>

								{socialMedia()}
							</ScrollView>
						</View>
					</View>
				</Modal>
			</TouchableOpacity>

			<TouchableHighlight
				style={styles.openButton}
				onPress={() => {
					setModalVisible(true);
				}}
			>
				<Text style={styles.textStyle}>Read Full Article</Text>
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 11,
	},
	modalView: {
		backgroundColor: "white",
		borderRadius: 20,
		padding: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		height: Dimensions.get("window").height - 100,
		shadowOpacity: 0.9,
		shadowRadius: 9,
		elevation: 100,
	},
	openButton: {
		backgroundColor: "#f5f5f5",
		borderRadius: 20,
		padding: 12,
		elevation: 2,
	},
	textStyle: {
		color: "#222",
		fontSize: 11,
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
		marginBottom: 2,
	},
	topCloseBtn: {
		backgroundColor: "#f5f5f5",
		color: "#222",
		fontSize: 25,
		textAlign: "center",
		alignItems: "flex-end",
		borderRadius: 25,
		width: 50,
		marginVertical: 10,
	},
	closeBtn: {
		color: "#fff",
		textAlign: "center",
	},
	posted: {
		color: "#757474",
		fontSize: 14,
	},
});

export default fullArticleModal;
