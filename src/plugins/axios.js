import axios from "axios";
import systemStore from "../stores/sistem";

// const system = systemStore();

axios.defaults.headers.post["Content-Type"] = "application/json";

const api = axios.create({
	baseURL: "http://localhost:3000/operacoes",
	headers: {
		"Access-Control-Allow-Origin": "*",
		Authorization: "authkey",
		userid: "1"
	}
});

const apiflask = axios.create({
	baseURL: "http://127.0.0.1:5000/"
	// baseURL: "https://valutech.herokuapp.com/"
	// headers: {
	// 	"Content-Type": "application/json",
	// },
});

const apidjango = axios.create({
	// baseURL: "http://127.0.0.1:8000/"
	baseURL: "https://valutech.herokuapp.com/"
	// headers: {
	// "Content-Type": "application/json",
	// Authorization: `Token ${system.userToken}`
	// }
});

const apiDjangoJson = axios.create({
	baseURL: "http://127.0.0.1:8000/",
	headers: {
		"Content-Type": "application/json",
		Authorization: "Token be62fda6f75126249978a4d8e29d38116d0c49c6"
	}
});

export { api, apidjango, apiDjangoJson, apiflask };
