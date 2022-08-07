<template>
    <SkelCal v-if="state.isLoading" />
    <div class="" v-else>
        <vue-cal class="min-h-[400px] rounded" :time="false" active-view="year" :disable-views="['years', 'year']"
            :events="state.events" locale="pt-br">
            <template v-slot:cell-content="{ view, events }">
                <span class="vuecal__no-event" v-if="['week', 'day'].includes(view.id) && !events.length">Sem Eventos
                    👌</span>
            </template>

        </vue-cal>

    </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/i18n/pt-br.js'
import 'vue-cal/dist/vuecal.css'

import { reactive } from 'vue'
import { apidjango } from '../../plugins/axios'
import SkelCal from '../Skelter/SkelCal.vue'
import systemStore from '../../stores/sistem'


export default {
    components: { VueCal, SkelCal },
    setup() {
        const system = systemStore()
        const headers = {
            Authorization: `Token ${system.userToken}`
        }
        const state = reactive({
            url: "npproject/formdata/random_cal/",
            isLoading: false,
        })
        async function sugestionKeyword() {
            state.isLoading = true
            const response = await apidjango
                .get(state.url, {
                    headers: headers
                })
                .then((resp) => {
                    let data = JSON.parse(JSON.stringify(resp.data.data))
                    state.events = data
                    console.log(data)
                }).catch((err) => {
                    console.log(err)
                }).finally(() => {
                    state.isLoading = false
                })
        }
        return { state, sugestionKeyword }
    },

    created() {
        this.sugestionKeyword()
    }
}
</script>

<style>
.vuecal__cell-events {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;

}

.vuecal__event {
    width: 90%;
    padding: 6px;
    margin: 2px 4px 2px;
}

.vuecal__event.facebook {
    background-color: blue;
    border: 1px solid blue;
    color: #fff;
}

.vuecal__event.instagram {
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);
    border: 1px solid #D2317C;
    color: #fff;
}

.vuecal__event.email {
    background-color: rgba(52, 106, 206, 0.9);
    border: 1px solid rgb(52, 106, 206);
    color: #fff;
}

.vuecal__event.youtube {
    background-color: rgba(196, 48, 43, 0.9);
    border: 1px solid rgb(196, 48, 43);
    color: #fff;
}
</style>