import React, { PureComponent } from "react";
import {
	StyleSheet,
	View,
	Text,
	Button,
	Image,
	Dimensions,
} from "react-native";
import HTML from "react-native-render-html";
import moment from "moment";
import FullArticle from "./fullArticleModel";

const Article = ({ item }) => {
	const postedToday = () => {
		const datePosted = moment(item.modified).format("YYYY-M-D");
		const todaysDate = moment().format("YYYY-M-D");
		if (datePosted == todaysDate) {
			return <Text style={styles.postedToday}>New</Text>;
		} else {
			return null;
		}
	};
	postedToday();

	return (
		<View style={styles.articleView}>
			<View style={styles.titleBox}>{postedToday()}</View>
			<HTML
				html={`<h2>${item.title.rendered}</h2>` || "<h2></h2>"}
				tagsStyles={{ h2: { margin: 0, padding: 0 } }}
			/>
			<Text style={styles.posted}>
				Posted: {moment(item.modified).format("MMMM Do YYYY, h:mm")}
			</Text>
			<HTML html={item.excerpt.rendered || "<p></p>"} />
			<FullArticle item={item} />
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
	dioceseTextBox: {
		textAlign: "center",
		backgroundColor: "#214076",
		padding: 5,
		borderRadius: 30,
		color: "#fff",
		marginTop: 12,
		width: 150,
		fontSize: 12,
	},
	heraldTextBox: {
		textAlign: "center",
		backgroundColor: "#b28025",
		padding: 5,
		color: "#fff",
		marginTop: 12,
		width: 150,
		borderRadius: 30,
		fontSize: 13,
	},
	charitiesTextBox: {
		textAlign: "center",
		backgroundColor: "#85cebf",
		padding: 5,
		color: "#fff",
		marginTop: 12,
		borderRadius: 30,
		width: 150,
		fontSize: 14,
	},
	posted: {
		color: "#757474",
		fontSize: 12,
	},
	postedToday: {
		textAlign: "center",
		color: "#fff",
		backgroundColor: "#D10F19",
		fontWeight: "bold",
		fontSize: 11,
		padding: 5,
		marginTop: 2,
		borderRadius: 30,
		width: 50,
	},
});

export default Article;
