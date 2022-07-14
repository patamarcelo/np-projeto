<template>



    <div class="flex flex-center overflow-auto break-words justify-center">
        <div class="w-full">
            <h1 class="bg-blue-3">
                User Page</h1>
        </div>
        <div class="flex flex-center mt-4">
            {{ userStore.dataUser }}
        </div>
        <div class="flex flex-col break-words w-full">
            <h1 class=" text-2xl text-bold font-serif mb-4">Nome: {{ userStore.user.name }}</h1>
            <h1 class="text-2xl  text-bold break-words whitespace-normal font-serif mb-4">IMG: {{ userStore.user.img }}
            </h1>
        </div>

    </div>


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