<template>
    <div class="">
        <vue-cal class="min-h-[400px] rounded" :time="false" active-view="week" :disable-views="['years', 'year']"
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

export default {
    components: { VueCal },
    setup() {
        const state = reactive({
            events: [
                {
                    start: '2022-07-29',
                    end: '2022-07-29',
                    title: 'Postagem no Facebook',
                    content: '<i class="v-icon material-icons">facebook</i>',
                    class: 'facebook'
                },
                {
                    start: '2022-07-27',
                    end: '2022-07-27',
                    title: 'Email para o Marcelo pata sobre minhas dúvidas',
                    content: '<i class="v-icon material-icons">mail</i>',
                    class: 'email'
                },
                {
                    start: '2022-07-27',
                    end: '2022-07-27',
                    title: 'Dad\'s birthday!',
                    content: '<i class="v-icon material-icons">facebook</i>',
                    class: 'facebook'
                }
            ]
        })
        return { state }
    }

}
</script>

<style>
.vuecal__event {
    padding: 3px;
    margin: 0 0 4px 0;
}

.vuecal__event.facebook {
    background-color: rgba(253, 156, 66, 0.9);
    background-color: blue;
    border: 1px solid rgb(233, 136, 46);
    border: 1px solid blue;
    color: #fff;

}

.vuecal__event.email {
    background-color: rgba(255, 102, 102, 0.9);
    border: 1px solid rgb(235, 82, 82);
    color: #fff;
}
</style>