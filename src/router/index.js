import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const Form = () => import("../components/Form/index.vue");
const User = () => import("../components/User/index.vue");
const Google = () => import("../components/Google/index.vue");
const Page2 = () => import("../components/Page2/index.vue");

const routes = [
	{
		path: "/home",
		name: "Home",
		component: Home
	},
	{
		path: "/google",
		name: "Google",
		component: Google
	},
	{
		path: "/page2",
		name: "Page2",
		component: Page2
	},
	{
		path: "/form",
		name: "Form",
		component: Form
	},
	{
		path: "/user",
		name: "User",
		component: User
	}
];

const router = createRouter({
	history: createWebHistory("/"),
	routes
});

export default router;
