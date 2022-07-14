<template>
    <div class="main-dash">
        <div>
            <router-view v-slot="{ Component }">
                <!-- <q-slide-transition transition-show="rotate"> -->
                    <component :is="Component" />
                <!-- </q-slide-transition> -->
            </router-view>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-dash {
    margin: 20px;
    border-radius: 10px;
    overflow-y: auto;
    max-height: 100vh;
}


.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
