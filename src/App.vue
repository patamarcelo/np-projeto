<script>

import Dashboard from './components/Dashboard/index.vue';
import Drawer from './components/Nav/index.vue';
import Auth from './views/Auth.vue'
import systemStore from './stores/sistem'

export default {
  components: { Dashboard, Drawer, Auth },
  setup() {
    const system = systemStore()

    return { system }
  },
  computed: {
    isLogado() {
      if (this.system.isAutenticated && this.system.userToken) {
        return true
      } else {
        return false
      }
    }
  }
}

</script>

<template>
  <q-slide-transition>
    <template v-if="isLogado">

      <div class="container-prop">
        <Drawer />
        <Dashboard />
      </div>
    </template>
    <template v-else>
      <Auth />
    </template>
  </q-slide-transition>
</template>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.container-prop {
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
}

body {
  background-color: whitesmoke;
  background-color: rgb(237, 239, 243) !important;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  overflow-y: hidden;
  /* color: #2c3e50; */
}

#nav {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>