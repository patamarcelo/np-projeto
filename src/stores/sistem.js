import { defineStore } from "pinia";

const systemStore = defineStore("system", {
	id: "system",
	state() {
		return {
			isLoading: false,
			isAutenticated: false,
			userToken: ""
		};
	},
	// getters: {
	// 	userCap(state) {
	// 		return state.user.name.toUpperCase();
	// 	}
	// },
	actions: {
		changeName() {
			this.isLoading = !this.isLoading;
		},
		auth() {
			this.isAutenticated = true;
		},
		logOut(){
			this.isAutenticated = false;
		},
		setToken(token) {
			this.userToken = token;
		}
	}
});

export default systemStore;
