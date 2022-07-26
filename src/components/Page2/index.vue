<template>
    <div class="main-container-result mb-10">
        <Skel v-if="state.isLoading" />
        <div v-else>
            <div class="">
                <BoxText title="Calendario ">
                    <div class=" m-2 p-4 w-full">
                        <Cal />
                    </div>

                </BoxText>


                <BoxText title="Video Tutorial Canvas">
                    <div class=" m-2 p-4 w-full">
                        <q-video :ratio="16 / 9" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
                    </div>
                </BoxText>

                <BoxText title="PALVRAS SUGERIDAS" />

                <BoxText title="COM, ONDE, COMO, TIPO, PERTO, PARECIDO COM, PARA, PRÓXIMO " />

                <BoxText title="Timeline ">
                    <div class=" m-2 p-4 w-full max-h-[90vh]">
                        <Timeline />
                    </div>
                </BoxText>

            </div>
        </div>
    </div>

</template>

<script>
import Skel from './Skelter.vue'
import { reactive } from 'vue'
import BoxText from './BoxText.vue'
import Cal from './Cal.vue'
import Timeline from './Timeline.vue'

export default {
    components: { Skel, BoxText, Cal, Timeline },
    setup() {
        const state = reactive({
            isLoading: false,
        })

        return {
            state
        }
    },

    created() {
        this.state.isLoading = true
        setTimeout(() => {
            this.state.isLoading = false
        }, 1000)
    }
}
</script>

<style>
</style>