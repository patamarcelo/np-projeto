<template>
    <q-layout>

        <q-page-container>
            <q-page class="flex flex-center">

                <div
                    class="flex flex-col w-full  md:w-3/5 lg:w-2/5 max-w-[500px] border-none justify-center items-center border-2  rounded-lg shadow-15 bg-white m-10 p-10 ">
                    <div class="flex w-full flex-col rounded-lg ">
                        <h1 class="text-2xl  text-bold font-serif mb-4">Login</h1>
                        <q-input @keydown.enter="loginSistem" :rules="state.rules.username"
                            v-model="state.user.username" type="email" hide-hint hint="Nome de usuário" for="email"
                            label="E-mail" />
                        <q-input @keydown.enter="loginSistem" counter :rules="state.rules.password"
                            v-model="state.user.password" type="password" hide-hint hint="Senha" for="password"
                            label="Senha" />
                        <div class="text-left flex">
                            <q-icon class="mr-1 self-center" :name="state.rules.passLength ? 'check_circle' : 'cancel'"
                                :color="state.rules.passLength ? 'positive' : 'negative'"></q-icon>
                            Senha precisa conter 8 dígitos.
                        </div>
                        <div class="text-left flex">
                            <q-icon class="mr-1 self-center" :name="state.rules.passNumber ? 'check_circle' : 'cancel'"
                                :color="state.rules.passNumber ? 'positive' : 'negative'"></q-icon>
                            Precisa conter pelo menos um número.
                        </div>
                    </div>
                    <div class="flex w-full flex-col mt-10">
                        <q-btn :disable="!validatePassword(state.user.password) || !state.user.username" color="teal"
                            @click="loginSistem" label="Entrar" :loading="state.isLoading">
                            <template v-slot:loading>
                                <q-spinner-facebook />
                            </template>
                        </q-btn>

                    </div>



                </div>
            </q-page>
        </q-page-container>

    </q-layout>
</template>

<script>
import systemStore from '../stores/sistem'
import useStore from '../stores/user'

import { useQuasar } from 'quasar'
import { onBeforeUnmount } from 'vue'
import { reactive } from 'vue'
import { apidjango } from '../plugins/axios'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const system = systemStore()
        const userStore = useStore()
        const $q = useQuasar()

        // let timer
        const state = reactive({
            user: {
                password: '',
                username: '',
            },
            isLoading: false,
            rules: {
                passLength: false,
                passNumber: false,
                password: [
                    // val => !!val || 'Senha Obrigatória',
                    // v => (v && v.length == 8) || "Senha precisa conter 8 dígitos",
                    v => (validatePassword(v)) || "Senha Inválida",
                ],
                username: [
                    val => !!val || 'Email Obrigatório',
                    v => /.+@.+\..+/.test(v) || "E-mail precisa ser válido",

                ]
            }
        })

        function validatePassword(password) {
            state.rules.passLength = password.length >= 8;

            state.rules.passNumber = /^(?=.*[0-9]).*$/.test(password);

            return (state.rules.passLength && state.rules.passNumber)
        }

        function loginSistem() {
            loginRequest()
            let url = "auth/";
            apidjango
                .post(url, JSON.parse(JSON.stringify(state.user)))
                .then((resp) => {
                    // console.log(resp.data)
                    // let user_id = resp.data.user_id
                    let token = resp.data.token;
                    system.setToken(token);
                    system.auth()
                    // this.demoStore.registerUserId(user_id);

                    let user_img = resp.data.image
                    let name = resp.data.first_name + " " + resp.data.last_name
                    userStore.changeName(name)
                    userStore.registerUserImg(user_img);
                    // this.demoStore.changeLogin();
                    router.push({ name: "Home" });
                })
                .catch((error) => {
                    if (error.response.data.non_field_errors) {
                        var error_msg = error.response.data.non_field_errors
                    } else {
                        var error_msg = error.response.status
                    }
                    console.log(error.response);
                    $q.notify({
                        position: 'top-right',
                        type: 'negative',
                        message: `Erro: ${error_msg}`,
                        progress: true,
                        icon: 'announcement',

                    })
                }).finally(() => {
                    $q.loading.hide()
                    state.isLoading = false
                })
        }

        function loginRequest() {
            state.isLoading = true
            $q.loading.show({
                message: 'Efetuando o Login....',
                boxClass: 'bg-grey-2 text-grey-9',
                spinnerColor: 'primary'
            })
        }

        return {
            state,
            loginSistem,
            validatePassword
        }
    }
}
</script>


<style scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
