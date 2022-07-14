<template>
    <q-layout>
        <q-page-container>
            <q-page class="flex flex-center flex-col">
                <h1 class="text-2xl  text-bold font-serif mb-4">HOME PAGE</h1>
                <!-- <h1 class="text-2xl  text-bold font-serif mb-4">{{ system.userToken }}</h1> -->

            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
import systemStore from '../stores/sistem'
import useStore from '../stores/user'

export default {
    setup() {
        const system = systemStore()
        const userStore = useStore()

        return {
            system, userStore
        }
    }
}

</script>


<style scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
