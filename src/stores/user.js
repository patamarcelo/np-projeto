import { defineStore } from "pinia";

const useStore = defineStore("user", {
	id: "user",
	state() {
		return {
			user: {},
			dataUser: {}
		};
	},
	getters: {
		userCap(state) {
			if (state.user.name) {
				return state.user.name.toUpperCase();
			}
		},
		getDataUser(state) {
			if (state.dataUser) {
				return state.dataUser;
			}
		}
	},
	actions: {
		changeName(name) {
			this.user.name = name;
		},
		setDataUser(data) {
			this.dataUser = data;
		},
		registerUserImg(img) {
			this.user.img = img;
		},
		lougOut() {
			this.user = {};
		}
	}
});

export default useStore;
