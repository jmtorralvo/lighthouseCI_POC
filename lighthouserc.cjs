module.exports = {
	ci: {
		collect: {
			startServerCommand: "npm run dev",
			url: ["http://localhost:3000"],
		},
		assert: {
			assertions: {
				"categories:performance": ["warn", { minScore: 0.9 }],
				"categories:accessibility": ["error", { minScore: 1 }],
			},
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
