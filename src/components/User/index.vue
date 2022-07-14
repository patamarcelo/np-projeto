<template>

    <q-layout>
        <q-page-container>
            <q-page class="flex flex-center flex-col w-full whitespace-normal">
                <div class="w-full">
                    <h1 class="bg-orange-3">
                        User Page</h1>
                </div>
                <div class="flex flex-center mt-4">
                    {{ userStore.dataUser }}
                </div>
                <h1 class="text-2xl  text-bold font-serif mb-4">Nome: {{ userStore.user.name }}</h1>
                <h1 class="text-2xl  text-bold font-serif mb-4">IMG: {{ userStore.user.img }}</h1>

            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
import useStore from '../../stores/user'
export default {
    setup() {
        const userStore = useStore()
        return { userStore }
    }
}
</script>

<style scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>