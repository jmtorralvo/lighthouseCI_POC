import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/lighthouseCI_POC/",
	server: {
		open: true,
		port: 3000,
	},
});
