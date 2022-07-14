<template>
    <div class="nav-bar" :class="state.isHide ? 'nav-hide' : 'nav-show'">
        <div class="container p-0">

            <div class="title">
                <div class="cursor-pointer"
                    :class="state.isHide ? ['btn-hide', 'rotate-90'] : ['btn-show', 'rotate-270']">
                    <q-btn round :color="state.isHide ? 'secondary' : 'primary'"
                        :icon="state.isHide ? 'navigation' : 'navigation'" size="sm"
                        @click="state.isHide = !state.isHide" />
                </div>
                <q-img src="../../assets/logo.png" />

            </div>
            <div class="links">
                <template v-for="(link, index) in links" :key="index">
                    <router-link active-class="active router-link-active" exact :to="link.path" v-if="link.show">
                        <q-icon :name="link.icon" />
                        <span class="q-ml-lg" v-if="!state.isHide">{{ link.display }}</span>
                    </router-link>
                </template>
            </div>
            <div class="rodape">
                <div>
                    <router-link to="/user">
                        <q-avatar size="62" :class="{ 'q-mb-xl': state.isHide }">
                            <!-- <q-img alt="Avatar" src="../../assets/avatar.png" /> -->
                            <q-img alt="Avatar" :src="userStore.user.img" />

                            <!-- <img :src="imageUser" style=height: 200px; width: 200px" /> -->
                        </q-avatar>
                        <h1 v-if="!state.isHide">{{ userStore.user.name }}</h1>
                    </router-link>
                </div>
                <q-btn color="deep-orange" glossy size="sm" label="Sair" @click="logout" />
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
import { fasChartPie, fabGoogle } from '@quasar/extras/fontawesome-v5'
import { reactive } from 'vue'
import systemStore from '../../stores/sistem'
import useStore from '../../stores/user'

export default {
    setup() {
        const system = systemStore()
        const userStore = useStore()
        const state = reactive({
            isHide: false,
        })
        return { state, system, userStore }
    },
    data() {
        return {
            links: [
                { name: "Home", path: "/home", display: "Home", icon: "home", show: true, },
                {
                    name: "Form",
                    path: "/form",
                    display: "Form",
                    icon: "fab fa-wpforms",
                    show: true,
                },
                {
                    name: "Google",
                    path: "/google",
                    display: "Google",
                    icon: fabGoogle,
                    show: true,
                },
                {
                    name: "Pag2",
                    path: "/page2",
                    display: "Página 2",
                    icon: fasChartPie,
                    show: false,
                },
            ],
        };
    },
    methods: {
        logout() {
            this.system.setToken(null);
            this.system.logOut();
            this.userStore.lougOut();
        },
    },
};
</script>

<style scoped>
[data-icon] {
    margin-right: 21px;
    padding-left: 5px;
}

.router-link-active [data-icon] {
    color: darkblue;
}

img {
    max-width: 100px;
    height: 40%;
    margin: 0 auto;
    padding-top: 20px;
}

.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.nav-bar {
    box-shadow: 5px 0 5px #888;
    display: flex;
    flex-direction: column;
    justify-content: top;
    background-color: purple;
    min-height: 700px;
    max-height: 100vh;
    width: 140px;
    transition: all 0.5s;
    background-image: linear-gradient(35deg,
            hsl(226deg 100% 20%) 0%,
            hsl(245deg 61% 29%) 11%,
            hsl(257deg 60% 33%) 22%,
            hsl(267deg 61% 37%) 33%,
            hsl(275deg 62% 40%) 44%,
            hsl(283deg 64% 43%) 56%,
            hsl(291deg 68% 45%) 67%,
            hsl(298deg 72% 46%) 78%,
            hsl(304deg 81% 49%) 89%,
            hsl(308deg 100% 50%) 100%);
    background: rgb(2, 0, 36);
    background: linear-gradient(3deg, rgba(2, 0, 36, 1) 0%, rgba(62, 0, 120, 1) 50%, rgba(0, 212, 255, 1) 100%);
}

.nav-hide {
    width: 70px;
    transition: all 0.5s
}

.btn-hide {
    margin-top: -60px;
    margin-bottom: 30px;
    margin-right: -70px;
    transition: all 0.5s
}

.btn-show {
    margin-top: -30px;
    margin-bottom: 30px;
    margin-right: -140px;
    transition: all 0.5s
}

.title {
    width: 70%
}

.links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-left: 7px;
}

a {
    margin: 10px;
    margin-right: 0px;
    padding: 10px;
    color: white;
    text-decoration: none;
    font-size: 14px;
    white-space: nowrap;
    text-align: left;
    width: 100%;
    box-sizing: content-box;
}


.links .router-link-active {
    position: relative;
    width: 90%;
    background-color: whitesmoke;
    background-color: rgb(237, 239, 243);
    color: purple !important;
    font-weight: bold;
    margin: 10px 0px;
    margin-left: 5px;
    border-radius: 10px 0px 0px 10px;
    text-align: left;
    /* border: 0 0 0 0 solid black; */
}

.links>a:hover :not(.router-link-active > [role="img"]) {
    opacity: 0.5;
    filter: alpha(opacity=100);
    color: white !important;
}

a:hover,
h1:hover {
    color: white !important;
}

a:hover {
    background: rgb(245, 245, 245, 0.2);
    width: 90%;
    border-radius: 8px 0 0 8px;
}

.router-link-active>h1 {
    opacity: 0.5;
    filter: alpha(opacity=100);
}

.rodape a>h1 {
    margin-top: 7px;
    font-size: 16px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.rodape [href] {
    margin: 0px;
    padding: 0px;
}
</style>
