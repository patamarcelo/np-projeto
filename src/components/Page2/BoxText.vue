<template>
    <div class="bg-white  p-4 rounded-xl flex  shadow-lg q-ma-md overflow-auto scroll-auto m-4 flex-center flex-col justify-start items-start"
        style="width: 90wh; min-height: 50vh">

        <h1 class="text-2xl  text-bold font-serif m-6 sticky top-0 ">{{
                title
        }}
        </h1>

        <slot></slot>

    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
    props: ['title'],
    setup() {
        const state = reactive({
            title: ''
        })
        return {
            state
        }
    }

}
</script>

<style>
</style>