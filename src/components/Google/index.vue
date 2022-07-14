<template>
    <div class="flex row w-full">
        <div class="flex w-full m-2 p-2 justify-center">
            <q-card class="my-card bg-blue-100 w-1/2 text-white min-w-[500px]">
                <q-card-section>


                    <div class="flex w-full justify-between items-baseline">
                        <div class=" w-8/12  p-2 m-2">
                            <q-input v-model="state.keyword" label="Procurar a palavra" />
                        </div>
                        <div class=" p-2 m-2">
                            <q-btn round :loading="state.isLoading" color="secondary" @click="callAxios"
                                :disable="!state.keyword" icon="search" class="mr-2" />
                            <q-btn round color="red" @click="clearSearch" :disable="state.findWord || state.keyword"
                                icon="close" v-if="state.findWord || state.keyword.length > 0" />
                        </div>
                    </div>

                </q-card-section>

            </q-card>
        </div>
        <div class="flex justify-start mb-6">

            <div class="flex min-w-[600px] w-1/3/1 m-1 p-2" v-if="state.isLoading || state.lista">
                <q-card class=" my-card bg-primary w-full text-white">
                    <q-card-section>
                        <div class="text-h6">Busca por palavra chave</div>
                        <div class="text-subtitle2">Sugestões pelo Google</div>
                    </q-card-section>
                    <q-card-section>
                        <Skel v-if="state.isLoading" />
                        <div class="q-pa-md" v-else>
                            <q-table :title="state.findWord" :rows="state.lista" :columns="state.columns"
                                row-key="id" />
                        </div>
                    </q-card-section>
                </q-card>
            </div>
            <div class="flex min-w-[600px]   w-1/3/1 m-1 p-2" v-if="state.isLoadingQueries || state.rising">
                <q-card class=" my-card bg-primary w-full text-white">
                    <q-card-section>
                        <div class="text-h6">Busca por palavra chave</div>
                        <div class="text-subtitle2">
                            Rising
                            <q-icon name="fas fa-caret-up" class="text-green-300 align-center" />
                        </div>

                    </q-card-section>
                    <q-card-section>
                        <Skel v-if="state.isLoadingQueries" />
                        <div class="q-pa-md" v-else>
                            <q-table :title="state.findWord" :rows="state.rising" :columns="state.columns_rising"
                                row-key="id" />
                        </div>
                    </q-card-section>
                </q-card>
            </div>
            <div class="flex min-w-[600px] w-1/3/1 m-1 p-2" v-if="state.isLoadingQueries || state.top">
                <q-card class=" my-card bg-primary w-full text-white">
                    <q-card-section>
                        <div class="text-h6">Busca por palavra chave</div>
                        <div class="text-subtitle2">
                            TOP
                            <q-icon name="fas fa-fighter-jet" class="text-green-300 align-center ml-2 rotate-315" />
                        </div>

                    </q-card-section>
                    <q-card-section>
                        <Skel v-if="state.isLoadingQueries" />
                        <div class="q-pa-md" v-else>
                            <q-table :title="state.findWord" :rows="state.top" :columns="state.columns_top"
                                row-key="id" />
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script>
import useStore from '../../stores/user'
import { reactive } from 'vue';
import { apiflask } from '../../plugins/axios'
import Skel from './Skel.vue'

export default {
    components: { Skel },
    setup() {
        const state = reactive({
            rows: [],
            isLoading: false,
            isLoadingQueries: false,
            lista: '',
            rising: '',
            top: '',
            keyword: 'crossfit',
            columns: [{
                name: 'id',
                required: true,
                label: '',
                align: 'left',
                field: 'id',
                sortable: true,
            },
            {
                name: 'title',
                align: 'center',
                label: 'Title',
                field: 'title',
                sortable: true,
            },
            {
                name: 'type',
                align: 'center',
                label: 'Tipo',
                field: 'type',
                sortable: true,
            },
            ],
            columns_rising: [{
                name: 'id',
                required: true,
                label: '',
                align: 'left',
                field: 'id',
                sortable: true,
            },
            {
                name: 'query',
                align: 'center',
                label: 'Termo Procurado',
                field: 'query',
                sortable: true,
            },
            {
                name: 'value',
                align: 'center',
                label: 'Valor',
                field: 'value',
                sortable: true,
            },
            ],
            columns_top: [{
                name: 'id',
                required: true,
                label: '',
                align: 'left',
                field: 'id',
                sortable: true,
            },
            {
                name: 'query',
                align: 'center',
                label: 'Termo Procurado',
                field: 'query',
                sortable: true,
            },
            {
                name: 'value',
                align: 'center',
                label: 'Valor',
                field: 'value',
                sortable: true,
            },
            ],
            findWord: ''
        })
        let user = useStore()
        let url = "sugestions_keyword";
        let url_queries = "related_queries";

        async function sugestionKeyword() {
            state.isLoading = true
            const response = await apiflask
                .post(url, { 'keyword': state.keyword })
                .then((resp) => {
                    let data = JSON.parse(JSON.stringify(resp.data.data))
                    state.lista = data
                    state.keyword = ''
                }).catch((err) => {
                    console.log(err)
                }).finally(() => {
                    state.isLoading = false
                })
        }
        async function relatedQueries() {
            state.isLoadingQueries = true
            const response = await apiflask
                .post(url_queries, { 'keyword': state.keyword })
                .then((resp) => {
                    let data = JSON.parse(JSON.stringify(resp.data.data))
                    state.rising = data.rising
                    state.top = data.top
                    state.keyword = ''
                }).catch((err) => {
                    console.log(err)
                }).finally(() => {
                    state.isLoadingQueries = false
                })
        }
        async function callAxios() {
            state.findWord = state.keyword
            sugestionKeyword()
            relatedQueries()
        }
        function clearSearch() {
            state.lista = ''
            state.rising = ''
            state.top = ''
            state.keyword = ''
            state.findWord = ''
        }
        return {
            user,
            state,
            callAxios,
            clearSearch
        }
    }

}
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>