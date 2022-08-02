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


                <BoxText title="Tutoriais">
                    <q-separator />
                    <div class="w-full">
                        <q-tabs v-model="state.tab" dense class="text-grey" active-color="primary"
                            indicator-color="primary" align="left" narrow-indicator>
                            <q-tab name="canvas" label="Canvas" />
                            <q-tab name="fotos" label="Fotos" />
                            <q-tab name="videos" label="Videos" />
                            <q-tab name="cores" label="Cores" />
                        </q-tabs>

                        <q-separator />
                        <q-tab-panels v-model="state.tab" animated>
                            <q-tab-panel name="canvas" class="flex justify-start items-start">
                                <div class="text-h6">Descrição Canvas</div>
                                <p class="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                                    saepe consequatur
                                    rerum blanditiis facere, aperiam harum nesciunt at corrupti veritatis dicta
                                    inventore perferendis non odio unde, accusantium obcaecati quibusdam sequi.</p>
                                <div class=" m-2 p-4 w-full">
                                    <q-video :ratio="16 / 9" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
                                </div>
                            </q-tab-panel>
                            <q-tab-panel name="fotos" class="flex justify-start items-start">
                                <div class="text-h6">Descrição Fotos</div>
                                <p class="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                                    saepe consequatur
                                    rerum blanditiis facere, aperiam harum nesciunt at corrupti veritatis dicta
                                    inventore perferendis non odio unde, accusantium obcaecati quibusdam sequi.</p>
                                <div class=" m-2 p-4 w-full">
                                    <q-video :ratio="16 / 9" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
                                </div>
                            </q-tab-panel>

                            <q-tab-panel name="videos" class="flex justify-start items-start">

                                <div class="text-h6">Descrição Videos</div>
                                <p class="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                                    saepe consequatur
                                    rerum blanditiis facere, aperiam harum nesciunt at corrupti veritatis dicta
                                    inventore perferendis non odio unde, accusantium obcaecati quibusdam sequi.</p>
                                <div class=" m-2 p-4 w-full">
                                    <q-video :ratio="16 / 9" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
                                </div>
                            </q-tab-panel>
                            <q-tab-panel name="cores" class="flex justify-start items-start">

                                <div class="text-h6">Descrição Cores</div>
                                <p class="text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                                    saepe consequatur
                                    rerum blanditiis facere, aperiam harum nesciunt at corrupti veritatis dicta
                                    inventore perferendis non odio unde, accusantium obcaecati quibusdam sequi.</p>
                                <div class=" m-2 p-4 w-full">
                                    <q-video :ratio="16 / 9" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
                                </div>
                            </q-tab-panel>
                        </q-tab-panels>
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
            tab: 'canvas'
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