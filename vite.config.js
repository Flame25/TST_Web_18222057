import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Root directory for the project
  server: {
    host: '0.0.0.0', // Allows access from external devices on your network
    port: 8256,       // You can keep or change the port
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        register: "register.html",
        login: "login.html",
      },
    },
  },
});
