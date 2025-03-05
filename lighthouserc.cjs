module.exports = {
	ci: {
		collect: {
			startServerCommand: "npm run dev",
			url: ["http://localhost:5173"],
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
