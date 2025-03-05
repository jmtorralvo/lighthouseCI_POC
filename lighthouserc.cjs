module.exports = {
	ci: {
		collect: {
			startServerCommand: "npm run dev",
			url: ["http://localhost:3000"],
			numberOfRuns: 5,
		},
		assert: {
			"median-run": true,
			assertions: {
				"categories:performance": ["error", { minScore: 0.9 }],
				"categories:accessibility": ["error", { minScore: 1 }],
				"categories:best-practices": ["error", { minScore: 1 }],
				"categories:seo": ["error", { minScore: 1 }],
				"first-contentful-paint": ["error", { maxNumericValue: 3000 }],
				"largest-contentful-paint": ["error", { maxNumericValue: 2500 }],
			},
			aggregationMethod: "median", // Can also be "optimistic", "pessimistic"
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
