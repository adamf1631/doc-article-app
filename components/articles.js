import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	ActivityIndicator,
	View,
	FlatList,
	TouchableOpacity,
	Image,
	Text,
} from "react-native";
import axios from "axios";
import Header from "./headers/heraldHeader";
import Article from "./article";

const Articles = () => {
	const [allArticles, setAllArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [err, isErr] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			isErr(false);
			setIsLoading(true);

			let results = await axios.get(
				"https://catholicstarherald.org/wp-json/wp/v2/posts?_embed&categories=17"
			);

			const sorted = results.data.sort((a, b) => a.modified < b.modified);

			setAllArticles(sorted);
			setIsLoading(false);
		};
		fetchData();
	}, []);

	return (
		<View>
			<View>
				<Header />
			</View>
			<View style={styles.articles}>
				{isLoading ? (
					<ActivityIndicator
						style={styles.isLoading}
						size='large'
						color='#b28025'
					/>
				) : (
					<FlatList
						data={allArticles}
						extraData={allArticles}
						renderItem={({ item }) => <Article item={item} />}
						keyExtractor={(item, i) => i.toString()}
					/>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	articles: {
		marginHorizontal: 12,
		marginBottom: 350,
	},
	isLoading: {
		marginVertical: 200,
	},
	footerNavBar: {
		marginTop: 25,
		flexDirection: "row",
		position: "absolute",
		justifyContent: "space-between",
		width: "100%",
		padding: 8,
		maxHeight: 200,
	},
	logoLink: {
		alignItems: "center",
		flexDirection: "column",
	},
	logoText: {
		textAlign: "center",
		color: "#222",
		fontWeight: "bold",
		fontSize: 12,
	},
});

export default Articles;
