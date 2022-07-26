<template>
    <div class="flex items-start flex-nowrap h-88 overflow-auto scroll-auto ">
        <div class="w-1/2 bg-white p-4 rounded-xl flex  shadow-lg q-ma-md overflow-auto scroll-auto self-stretch"
            style="min-width: 300px !important">
            <fieldset class="border-solid border-black border-2 w-full">
                <legend class="text-bold p-4 ml-8 text-left">Título </legend>
                <div class="flex flex-start flex-col items-start ml-4 mb-4 justify-center space-y-10">
                    <q-input class=" w-4/5 min-w-[250px]" dense outlined v-model="state.user.empresaNome"
                        label="Nome da Empresa" />
                    <q-input class=" w-4/5 min-w-[250px]" dense v-model="state.user.tipoNegocio" label="Tipo de negócio"
                        hint="Defina seu negócio" hide-hint counter />

                    <q-file name="logotipo" v-model="state.user.logo" use-chips label="Logotipo">
                        <template v-slot:prepend>
                            <q-icon name="attach_file" />
                        </template>
                    </q-file>
                </div>
            </fieldset>
        </div>
        <div id="segmentos" ref="segmentos"
            class=" w-2/4 items-start  bg-white p-4 rounded-xl overflow-auto scroll-auto  shadow-lg q-ma-md ">
            <fieldset class="border-solid  border-black border-2 w-full flex items-start ">
                <legend class="text-bold p-4 ml-8 text-left">Lista de Segmentos </legend>
                <div class="w-full flex items-start justify-start m-2 mt-0 p-2 pt-0 ">
                    <div class="flex flex-col  w-1/2 min-w-[180px]" v-for="(label, index) in state.checkLabels"
                        :key="index">
                        <q-checkbox v-model="label.value" :label="label.tipo"
                            :color="label.value == true ? 'green' : 'primary'" />

                    </div>
                </div>
                <q-slide-transition>
                    <div class="w-full flex items-start q-pa-md" v-if="outroSegmento">
                        <q-input v-model="state.user.outroSegmento" filled type="textarea" label="Outros" class="w-full"
                            autofocus clearable hint="Especifique outro tipo ou Tipos, separado por ';' " />
                    </div>
                </q-slide-transition>
            </fieldset>
        </div>
    </div>
    <div class="flex items-start flex-nowrap h-88 overflow-auto scroll-auto mb-6 ">

        <div id="social-media"
            class=" items-start  bg-white p-4 rounded-xl overflow-auto scroll-auto  shadow-lg q-ma-md ">
            <fieldset class="border-solid  border-black border-2 w-full flex items-start ">
                <legend class="text-bold p-4 ml-8 text-left">LISTA DE OBJETIVOS DO NEGÓCIO E PLATAFORMAS QUE IRÁ
                    TRABALHAR
                </legend>
                <span class="pl-6 pb-4 italic">Escolher um ou mais objetivos para definição da estratégia</span>
                <div class="w-full flex items-start justify-start m-2 mt-0 p-2 pt-0 ">
                    <div class="flex flex-col w-1/4 min-w-[180px]" v-for="(label, index) in state.socialLabels"
                        :key="index">
                        <q-checkbox v-model="label.value" :label="label.tipo"
                            :color="label.value == true ? 'green' : 'primary'" />
                    </div>

                </div>


                <q-card class="w-full flex items-start justify-around">
                    <div class="flex flex-column  w-2/4 column ml-4 p-4 mt-4 ">
                        <div class="w-full justify-around">
                            <p class="text-subtitle-1 text-bold">Adicione seus links aqui</p>
                            <div class="flex items-baseline">
                                <div class="w-4/5">
                                    <q-input @keyup.enter="!state.userLink ? '' : addToCanaisDigitais(state.userLink)"
                                        class="" hint="adcione como no exemplo: https://facebook.com.br/meuusario"
                                        hide-hint dense v-model="state.userLink" label="Canais Digitais"
                                        prefix="https://www." />
                                </div>
                                <div class=" w-1/5 ">
                                    <q-btn flat round color="green" icon="fas fa-plus"
                                        @click="addToCanaisDigitais(state.userLink)" :disable="!state.userLink" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <q-separator vertical inset v-if="state.canaisDigitais.length > 0" />
                    <div class="flex flex-column flex-grow column ml-4 p-4 mt-4 items-start justify-start "
                        v-if="state.canaisDigitais.length > 0">
                        <span class="text-bold">Links: </span>
                        <ul class="text-left">
                            <li v-for="(link, i) in state.canaisDigitais" class="pl-4" :key="i">
                                <q-icon name="fas fa-arrow-alt-circle-right" color="teal" size="xs" class="mr-2" />
                                <a class="cursor-pointer underline text-blue-700" :href="link" target="_blank">{{
                                        link
                                }} </a>
                                <q-btn class="ml-4" icon="close" round color="red" flat size="sm"
                                    @click="removeToCanaisDigitais(i)"></q-btn>
                            </li>
                        </ul>

                    </div>

                </q-card>
            </fieldset>
        </div>
    </div>

    <hr />


    <div class="flex items-start flex-nowrap h-88 overflow-auto scroll-auto mb-6 ">
        <div class=" w-full  items-start  bg-white p-4 rounded-xl overflow-auto scroll-auto  shadow-lg q-ma-md ">
            <fieldset class="border-solid  border-black border-2 w-full flex items-start ">
                <legend class="text-bold p-4 ml-8 text-left">DNA DO PROJETO</legend>
                <q-card flat>
                    <q-card-section>
                        <div class="text-justify italic pl-4 pr-4">
                            Este é o momento para definição do norte do que será explorado pela empresa. É o DNA do
                            conteúdo. São as características intrínsecas da empresa ou da personalidade do produtor do
                            conteúdo se este for o rosto de uma empresa ou marca. Essas características deverão permear
                            todas as etapas do seu projeto digital.

                        </div>
                    </q-card-section>
                    <q-card-section class="row justify-between">
                        <div v-for="(topico, i) in state.dnaFieldsProject" :key="i"
                            class="m-1 mb-3 ml-0 p-1 md:w-full lg:w-11/13" :class="topico.value ? 'bg-green-100' : ''">
                            <q-input class="w-full font-bold" v-model="topico.value" dense clearable filled
                                type="textarea" :label="topico.title" :hint="topico.hint" hide-hint />
                        </div>

                    </q-card-section>
                    <q-separator inset />
                    <q-card-section class="w-full flex items-start justify-around">
                        <div class="flex flex-column  w-2/4 column ml-4 p-4 mt-4 ">
                            <div class="w-full justify-around">
                                <p class="text-subtitle-1 text-bold">Adicione seus Concorrentes</p>
                                <div class="flex items-baseline">
                                    <div class="w-4/5">
                                        <q-input
                                            @keyup.enter="!state.userConcorrentes ? '' : addToConcorrentesDiretos(state.userConcorrentes)"
                                            class="" hint="Adicione seu 5 principais concorrentes" hide-hint dense
                                            v-model="state.userConcorrentes" label="Concorrentes" />
                                    </div>
                                    <div class=" w-1/5 ">
                                        <q-btn flat round color="green" icon="fas fa-plus"
                                            @click="addToConcorrentesDiretos(state.userConcorrentes)"
                                            :disable="!state.userConcorrentes" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <q-separator vertical inset v-if="state.concorrentesDiretos.length > 0" />
                        <div class="flex flex-column flex-grow column ml-4 p-4 mt-4 items-start justify-start "
                            v-if="state.concorrentesDiretos.length > 0">
                            <span class="text-bold">Concorrentes </span>
                            <ul class="text-left">
                                <li v-for="(concorrente, i) in state.concorrentesDiretos" class="pl-4" :key="i">
                                    <q-badge rounded color="primary" :label="i + 1" class="font-bold" />
                                    <span class="ml-4 ">{{ concorrente }}</span>
                                    <q-btn class="ml-4" icon="close" round color="red" flat size="sm"
                                        @click="removeToConcorrentesDiretosis(i)"></q-btn>
                                </li>
                            </ul>

                        </div>

                    </q-card-section>

                </q-card>

            </fieldset>
        </div>
    </div>

    <div class="flex items-start flex-nowrap h-88 overflow-auto scroll-auto mb-6 ">
        <div class=" w-full  items-start  bg-white p-4 rounded-xl overflow-auto scroll-auto  shadow-lg q-ma-md ">
            <fieldset class="border-solid  border-black border-2 w-full flex items-start ">
                <legend class="text-bold p-4 ml-8 text-left">PERSONAS</legend>
                <q-card flat>
                    <q-card-section>
                        <p class="text-title text-left font-bold pl-4 mb-2">Definição da Persona Ideal</p>
                        <div class="text-justify italic pl-4 pr-4">
                            As personas são a representação pessoal do cliente ideal. São os potenciais clientes que
                            devem ser atraídos e convencidos a comprar o seu produto, através do seu conteúdo produzido.
                            Quando identificamos os comportamentos das personas, encontramos com mais facilidade os
                            assuntos que devemos abordar no nosso conteúdo.

                        </div>
                    </q-card-section>
                    <q-card-section>
                        <div class="row  justify-between pl-2 m-3">
                            <q-input v-for="(dado, i) in state.personaData" :key="i" v-model="dado.value"
                                :label="dado.data" dense class="sm:w-full lg:w-1/3/1 m-2"
                                :rules="[val => !!val || 'Campo Obrigatório']" />
                        </div>
                    </q-card-section>

                    <q-separator inset />

                    <q-card-section>
                        <p class="text-title text-left font-bold pl-4 mb-2">Meios de Comunicação usados pela Persona
                        </p>
                        <div class="row  justify-start pl-2 m-3">
                            <div class="sm:w-2/5 lg:w-1/3/1 m-2 text-left"
                                v-for="(label, index) in state.personaSocialMedia" :key="index">
                                <q-checkbox v-model="label.value" :label="label.tipo"
                                    :color="label.value == true ? 'green' : 'primary'" />

                            </div>
                        </div>

                        <q-slide-transition>
                            <div class="w-full flex items-start q-pa-md" v-if="outraPersonaMidia">
                                <q-input v-model="state.persona.outroSocialMedia" filled type="textarea" label="Outros"
                                    class="w-full" autofocus clearable
                                    hint="Especifique outro tipo ou Tipos, separado por ';' " />
                            </div>
                        </q-slide-transition>
                    </q-card-section>

                    <q-separator inset />

                    <q-card-section>
                        <p class="text-title text-left font-bold pl-4 mb-2">Descreva a Persona:</p>
                        <div class="text-justify italic pl-4 pr-4">
                            Detalhes específicos, características pessoais, lugares que frequenta, onde mora, o que faz
                            nas horas vagas, família…
                        </div>
                        <q-card-section class="row justify-between">
                            <div v-for="(topico, i) in state.personaDescription" :key="i"
                                class="m-1 mb-3 ml-0 p-1 md:w-full lg:w-11/13"
                                :class="topico.value ? 'bg-green-100' : ''">
                                <q-input class="w-full font-bold" v-model="topico.value" dense clearable filled
                                    type="textarea" :label="topico.title" :hint="topico.hint" hide-hint />
                            </div>

                        </q-card-section>

                    </q-card-section>

                    <q-separator inset />

                </q-card>
            </fieldset>
        </div>
    </div>

    <div class="flex items-start flex-nowrap h-88 overflow-auto scroll-auto mb-6 ">
        <div class=" w-full  items-start  bg-white p-4 rounded-xl overflow-auto scroll-auto  shadow-lg q-ma-md ">
            <fieldset class="border-solid  border-black border-2 w-full flex items-start ">
                <legend class="text-bold p-4 ml-8 text-left">TITULO LISTA E PALAVRAS</legend>
                <q-card flat>
                    <q-card-section>
                        <p class="text-title text-left font-bold pl-4 mb-2">PALAVRAS-CHAVE</p>
                        <div class="text-justify italic pl-4 pr-4">
                            Digite algumas palavras que estão relacionadas ao seu segmento para nos ajudar a definir um
                            roteiros das mais utilizadas por pessoas que buscam serviços ou produtos como os seus no
                            principais buscadores na internet, como o Google.
                        </div>
                    </q-card-section>
                    <q-card-section class="w-full flex items-start justify-around">
                        <div class="flex flex-column  w-2/4 column ml-4 p-4 mt-4 ">
                            <div class="w-full justify-around">
                                <p class="text-subtitle-1 text-bold">Adicione Suas Palavras-Chave</p>
                                <div class="flex items-baseline">
                                    <div class="w-4/5">
                                        <q-input
                                            @keyup.enter="!state.userPalavrasChave ? '' : addToPalavrasChave(state.userPalavrasChave)"
                                            class="" hint="" hide-hint dense v-model="state.userPalavrasChave"
                                            label="Palavras-Chave" />
                                    </div>
                                    <div class=" w-1/5 ">
                                        <q-btn flat round color="green" icon="fas fa-plus"
                                            @click="addToPalavrasChave(state.userPalavrasChave)"
                                            :disable="!state.userPalavrasChave" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <q-separator vertical inset v-if="state.palavrasChave.length > 0" />
                        <div class="flex flex-column flex-grow column ml-4 p-4 mt-4 items-start justify-start "
                            v-if="state.palavrasChave.length > 0">
                            <span class="text-bold">Palavras-Chave </span>
                            <ul class="text-left">
                                <li v-for="(keyword, i) in state.palavrasChave" class="pl-4" :key="i">
                                    <q-icon name="fas fa-check" color="teal" size="xs" class="mr-2" />
                                    <span class="ml-4 ">{{ keyword }}</span>
                                    <q-btn class="ml-4" icon="close" round color="red" flat size="sm"
                                        @click="removeToPalavrasChave(i)"></q-btn>
                                </li>
                            </ul>

                        </div>

                    </q-card-section>


                    <q-separator inset />
                    <q-separator inset />
                    <q-separator inset />

                    <q-card-section>
                        <p class="text-title text-left font-bold pl-4 mb-2">LINHAS EDITORIAIS</p>
                        <div class="text-justify italic pl-4 pr-4">
                            As linhas editoriais são o conjunto de assuntos que a sua empresa vai abordar no seu
                            conteúdo e que servem de ponte entre a sua persona e os produtos ofertados.
                        </div>
                        <q-card-section class="w-full flex items-start justify-around">
                            <div class="flex flex-column  w-2/4 column ml-4 p-4 mt-4 ">
                                <div class="w-full justify-around">
                                    <p class="text-subtitle-1 text-bold">Lista de Linhas Editoriais</p>
                                    <div class="flex items-baseline">
                                        <div class="w-4/5">
                                            <q-input
                                                @keyup.enter="!state.userLinhasEditoriais ? '' : addToLinhasEditoriais(state.userLinhasEditoriais)"
                                                class=""
                                                hint="Pode ser mais de uma para o mesmo negócio, ex: Loja de Móveis - Linha Editorial: Decoração, Desing, Tendências"
                                                hide-hint dense v-model="state.userLinhasEditoriais"
                                                label="Linhas Editoriais" />
                                        </div>
                                        <div class=" w-1/5 ">
                                            <q-btn flat round color="green" icon="fas fa-plus"
                                                @click="addToLinhasEditoriais(state.userLinhasEditoriais)"
                                                :disable="!state.userLinhasEditoriais" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <q-separator vertical inset v-if="state.linhasEditoriais.length > 0" />
                            <div class="flex flex-column flex-grow column ml-4 p-4 mt-4 items-start justify-start "
                                v-if="state.linhasEditoriais.length > 0">
                                <span class="text-bold">Linhas Editoriais </span>
                                <ul class="text-left">
                                    <li v-for="(keyword, i) in state.linhasEditoriais" class="pl-4" :key="i">
                                        <q-icon name="fas fa-check" color="teal" size="xs" class="mr-2" />
                                        <span class="ml-4 ">{{ keyword }}</span>
                                        <q-btn class="ml-4" icon="close" round color="red" flat size="sm"
                                            @click="removeToLinhasEditoriais(i)"></q-btn>
                                    </li>
                                </ul>

                            </div>

                        </q-card-section>
                    </q-card-section>

                    <q-separator inset />
                    <q-separator inset />
                    <q-separator inset />

                    <q-card-section>
                        <p class="text-title text-left font-bold pl-4 mb-2">PESSOAS DE INTERESSE</p>
                        <div class="text-justify italic pl-4 pr-4">
                            Quem são as pessoas que mais se interessariam pelo seu produto ou serviço? Liste
                            profissionais relacionados ao seu segmento.

                        </div>
                        <q-card-section class="w-full flex items-start justify-around">
                            <div class="flex flex-column  w-2/4 column ml-4 p-4 mt-4 ">
                                <div class="w-full justify-around">
                                    <p class="text-subtitle-1 text-bold">Pessoas de Interesse</p>
                                    <div class="flex items-baseline">
                                        <div class="w-4/5">
                                            <q-input
                                                @keyup.enter="!state.userPessoasDeInteresse ? '' : addToPessoasDeInteresse(state.userPessoasDeInteresse)"
                                                class="" hint="" hide-hint dense v-model="state.userPessoasDeInteresse"
                                                label="Pessoas de Interesse" />
                                        </div>
                                        <div class=" w-1/5 ">
                                            <q-btn flat round color="green" icon="fas fa-plus"
                                                @click="addToPessoasDeInteresse(state.userPessoasDeInteresse)"
                                                :disable="!state.userPessoasDeInteresse" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <q-separator vertical inset v-if="state.pessoasDeInteresse.length > 0" />
                            <div class="flex flex-column flex-grow column ml-4 p-4 mt-4 items-start justify-start "
                                v-if="state.pessoasDeInteresse.length > 0">
                                <span class="text-bold">Pessoas de Interesse </span>
                                <ul class="text-left">
                                    <li v-for="(keyword, i) in state.pessoasDeInteresse" class="pl-4" :key="i">
                                        <q-icon name="fas fa-check" color="teal" size="xs" class="mr-2" />
                                        <span class="ml-4 ">{{ keyword }}</span>
                                        <q-btn class="ml-4" icon="close" round color="red" flat size="sm"
                                            @click="removeToPessoasDeInteresse(i)"></q-btn>
                                    </li>
                                </ul>

                            </div>

                        </q-card-section>
                    </q-card-section>

                    <q-separator inset />
                    <q-separator inset />
                    <q-separator inset />



                    <q-card-section>
                        <p class="text-title text-left font-bold pl-4 mb-2">NICHOS DE NEGÓCIO</p>
                        <div class="text-justify italic pl-4 pr-4">
                            Quais são os seus nichos de negócio? Nichos são subsegmentos dentro do segmento principal.

                        </div>
                        <q-card-section class="w-full flex items-start justify-around">
                            <div class="flex flex-column  w-2/4 column ml-4 p-4 mt-4 ">
                                <div class="w-full justify-around">
                                    <p class="text-subtitle-1 text-bold">Nichos de Negócio</p>
                                    <div class="flex items-baseline">
                                        <div class="w-4/5">
                                            <q-input
                                                @keyup.enter="!state.userNichosDeNegocio ? '' : addToNichosDeNegocio(state.userNichosDeNegocio)"
                                                class=""
                                                hint="ex: loja de móveis planejados é o segmento. Os nichos são: decoração estilo clássico, contemporâneo, vintage. Ou então, segmento MODA. Os nichos são os estilos, como casual, executivo, sports wear, academia, etc."
                                                hide-hint dense v-model="state.userNichosDeNegocio"
                                                label="Nichos de Negócio" />
                                        </div>
                                        <div class=" w-1/5 ">

                                            <q-btn flat round color="green" icon="fas fa-plus"
                                                @click="addToNichosDeNegocio(state.userNichosDeNegocio)"
                                                :disable="!state.userNichosDeNegocio" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <q-separator vertical inset v-if="state.nichosDeNegocio.length > 0" />
                            <div class="flex flex-column flex-grow column ml-4 p-4 mt-4 items-start justify-start "
                                v-if="state.nichosDeNegocio.length > 0">
                                <span class="text-bold">Nichos de Negócio</span>
                                <ul class="text-left">
                                    <li v-for="(keyword, i) in state.nichosDeNegocio" class="pl-4" :key="i">
                                        <q-icon name="fas fa-check" color="teal" size="xs" class="mr-2" />
                                        <span class="ml-4 ">{{ keyword }}</span>
                                        <q-btn class="ml-4" icon="close" round color="red" flat size="sm"
                                            @click="removeToNichosDeNegocio(i)"></q-btn>
                                    </li>
                                </ul>

                            </div>

                        </q-card-section>
                    </q-card-section>




                </q-card>
            </fieldset>
        </div>
    </div>


    <div class="flex flex-center mb-4">
        <q-btn color="primary" class="mb-6" label="Salvar" @click="saveData" />
    </div>

</template>

<script>
import { reactive, watch } from 'vue'
import useStore from '../../stores/user'
import { useRouter } from 'vue-router'
// import { apiDjangoJson } from '../../plugins/axios'
import { apiflask } from '../../plugins/axios'


export default {
    setup() {
        const router = useRouter()
        const store = useStore()
        const state = reactive({
            sepCard: 0,
            userLink: '',
            userConcorrentes: '',
            userPalavrasChave: '',
            userLinhasEditoriais: '',
            userPessoasDeInteresse: '',
            userNichosDeNegocio: '',
            user: {},
            persona: {},
            pessoasDeInteresse: [],
            linhasEditoriais: [],
            pessoasInteressadasSegmentos: [],
            nichosDeNegocio: [],
            personaDescription: [
                { title: 'Qual o objetivo pessoal ou profissional dessa pessoa que você quer ajudar?', hint: '', value: '' },
                { title: 'Quais desafios impedem essa pessoa de atingir seus objetivos?', hint: '', value: '' },
                { title: 'Qual o hobby dessa pessoa?', hint: '', value: '' },
                { title: 'Quais marcas ela mais se identifica e consome?', hint: '', value: '' },
                { title: 'Pratica esportes? Quantas vezes por semana?', hint: '', value: '' },
                { title: 'Quais seus tipos de comida preferidos?', hint: '', value: '' },
                { title: 'Que estilo de livros ela gosta de ler?', hint: '', value: '' },
                { title: 'Como a solução da sua empresa que ajuda essa pessoa a superar os desafios listados?', hint: '', value: '' },
                { title: 'Qual é o objetivo dessa persona e o que será importante para alcançá-lo?', hint: '', value: '' },
                { title: 'O que está impedindo ou acelerando esse processo?', hint: '', value: '' },
                { title: 'Qual a percepção dessa persona a respeito da mudança que essa aquisição que ela fará pode trazer para a vida dela?', hint: '', value: '' },
                { title: 'Para quem essa persona irá se dirigir quando precisar de informações?', hint: '', value: '' },
                { title: 'O que tornaria a aquisição do seu produto desnecessária? Qual o tipo de experiência a persona deve esperar ao pesquisa por mais informações?', hint: '', value: '' },
                { title: 'Quais as objeções mais comuns da Persona ao seu produto/serviço ou solução?', hint: '', value: '' },
                { title: 'O que essa Persona mais valoriza em relação ao seu produto, serviço, solução?', hint: '', value: '' },
                { title: 'O que a Persona está tentando encontrar e que ela mais valoriza?', hint: '', value: '' }
            ],
            personaData: [
                { data: 'Nome', value: '' },
                { data: 'Idade', value: '' },
                { data: 'Escolaridade', value: '' },
                { data: 'Sexo', value: '' },
                { data: 'Cargo/Ocupação', value: '' },
                { data: 'Nome da Empresa que trabalha', value: '' },
                { data: 'Tamanho da Empresa que trabalha', value: '' },
            ],
            personaSocialMedia: [
                { tipo: 'Redes Sociais', value: '' },
                { tipo: 'Blogs', value: '' },
                { tipo: 'E-mail', value: '' },
                { tipo: 'Anúncios em Mídias Sociais', value: '' },
                { tipo: 'Google', value: '' },
                { tipo: 'Telefone', value: '' },
                { tipo: 'Outros', value: '' },
            ],
            checkLabels: [
                { tipo: "Saúde", value: '' },
                { tipo: "Estética e Bem-Estar", value: '' },
                { tipo: "Arquitetura e Urbanismo", value: '' },
                { tipo: "Direito", value: '' },
                { tipo: "Varejo", value: '' },
                { tipo: "Imóveis", value: '' },
                { tipo: "Decoração", value: '' },
                { tipo: "Construção Civil", value: '' },
                { tipo: "Esporte", value: '' },
                { tipo: "Educação", value: '' },
                { tipo: "Outros", value: '' },
            ],
            socialLabels: [
                { tipo: "Instagram", value: '' },
                { tipo: "Facebook", value: '' },
                { tipo: "Youtube", value: '' },
                { tipo: "Podcasts", value: '' },
                { tipo: "Lives", value: '' },
                { tipo: "Estratégia e desempenho do site", value: '' },
                { tipo: "Blog", value: '' },
                { tipo: "Captação de Leads", value: '' },
                { tipo: "Conversão de leads", value: '' },
                { tipo: "Google Ads", value: '' },
                { tipo: "Identidade Visual", value: '' },
                { tipo: "Dicas", value: '' },
                { tipo: "E-bookds", value: '' },
            ],
            dnaFieldsProject: [
                { title: "Posicionamento:", hint: "Como você quer ser visto pelo seus clientes e pelo mercado em geral.", value: "" },
                { title: "Proposta de Valor:", hint: "É o valor mais peculiar do negócio que está emitindo o conteúdo", value: "" },
                {
                    title: "Transformação que o conteúdo é capaz de entregar: ", hint: "É o grande diferencial, o que o torna único e inigualável na mente dos consumidores desse produto ou conteúdo.", value: ""
                },
                { title: "Grande ideia do produto/serviço", hint: "É a ideia genial. A granda sacada que vai nortear todas as produções desse trabalho", value: "" },
                { title: "Ideias secundárias", hint: "São ideias derivativas da ideia principal. Como se fossem subprodutos que podem ser criados, aperfeiçoados e desenvolvidos como forma de ampliar o leque de serviços oferecidos", value: "" },
                { title: "Pontos fortes do projeto/empresa/serviço", hint: "São os aspectos que irão facilitar o alcance dos objetivos", value: "" },
                { title: "Desafios", hint: "São os pontos que necessitam atenção e mais investimento de energia para trazer os resultados esperados para o negócio.", value: "" },
                { title: "O que mais te atrai na internet?", hint: "Liste características de postagens que mais despertam o teu interesse e que te provocam reações interativas com eles como curtidas, salvamentos e compartilhamentos. Seja o mais específico possível. Cores, conteúdos, informações, vídeos engraçados, animais, esportes.", value: "" },
            ],
            canaisDigitais: [],
            concorrentesDiretos: [],
            palavrasChave: [],

        })

        function addToCanaisDigitais(el) {
            state.canaisDigitais.push("https://www." + el);
            state.userLink = ''
        }
        function removeToCanaisDigitais(i) {
            state.canaisDigitais.splice(i, 1)
        }

        function addToConcorrentesDiretos(el) {
            state.concorrentesDiretos.push(el);
            state.userConcorrentes = ''
        }
        function removeToConcorrentesDiretosis(i) {
            state.concorrentesDiretos.splice(i, 1)
        }
        function addToPalavrasChave(el) {
            state.palavrasChave.push(el);
            state.userPalavrasChave = ''
        }
        function removeToPalavrasChave(i) {
            state.palavrasChave.splice(i, 1)
        }
        function addToLinhasEditoriais(el) {
            state.linhasEditoriais.push(el);
            state.userLinhasEditoriais = ''
        }
        function removeToLinhasEditoriais(i) {
            state.linhasEditoriais.splice(i, 1)
        }
        function addToPessoasDeInteresse(el) {
            state.pessoasDeInteresse.push(el);
            state.userPessoasDeInteresse = ''
        }
        function removeToPessoasDeInteresse(i) {
            state.pessoasDeInteresse.splice(i, 1)
        }
        function addToNichosDeNegocio(el) {
            state.nichosDeNegocio.push(el);
            state.userNichosDeNegocio = ''
        }
        function removeToNichosDeNegocio(i) {
            state.nichosDeNegocio.splice(i, 1)
        }


        async function saveData() {
            const data = {
                'user': state.user,
                'persona': state.persona,
                'checkLabels': state.checkLabels.filter((e) => e.value == true),
                'socialLabels': state.socialLabels.filter((e) => e.value == true),
                'canaisDigitais': state.canaisDigitais,
                'dnaFieldsProject': state.dnaFieldsProject,
                'concorrentesDiretos': state.concorrentesDiretos,
                'nichosDeNegocio': state.nichosDeNegocio,
                'pessoasDeInteresse': state.pessoasDeInteresse,
                'linhasEditoriais': state.linhasEditoriais,
                'pessoasInteressadasSegmentos': state.pessoasInteressadasSegmentos

            }
            // const url = 'api/valutech/1/get_data_np_project/'
            // FLASK APP
            const url = 'get_data_np_project'
            try {
                const response = await apiflask.post(url, data,
                    {
                    }).then((resp) => {
                        console.log(resp.data)
                    }).catch((err) => {
                        console.log(err.response.data);
                    })
            } catch (err) {
                console.log(err.response)
            }
            store.setDataUser(state)
            router.push({ name: "User" });
        }

        return {
            state,
            store,
            addToCanaisDigitais,
            removeToCanaisDigitais,
            saveData,
            addToConcorrentesDiretos,
            removeToConcorrentesDiretosis,
            addToPalavrasChave,
            removeToPalavrasChave,
            addToLinhasEditoriais,
            removeToLinhasEditoriais,
            addToPessoasDeInteresse,
            removeToPessoasDeInteresse,
            addToNichosDeNegocio,
            removeToNichosDeNegocio
        }
    },
    beforeCreate() {
        console.log('before Create')
        const dataUser = this.store.getDataUser;
        console.log(dataUser)
        // if (dataUser) {
        //     this.state = dataUser
        // }
    },
    methods: {
        scrolDown() {
            console.log('funcionando')
            const objDiv = this.$refs.segmentos
            objDiv.scrollTop = objDiv.scrollHeight
        }
    },
    //     function scrolDown() {
    //         const segmentos = $el.querySelector("#segmentos");
    //         segmentos.scrollTop = segmentos.scrollHeight;
    // },
    computed: {
        outroSegmento() {
            let valid = this.state.checkLabels.find((e) => e.tipo == 'Outros').value
            return valid
        },
        outraPersonaMidia() {
            let valid = this.state.personaSocialMedia.find((e) => e.tipo == 'Outros').value
            return valid
        }
    },
    watch: {
        state: {
            // deep: true,
            immediate: true,
            // handler(newValue, oldValue) {
            //     const listaSegmentos = JSON.parse(JSON.stringify(newValue.checkLabels)).filter((e) => e.value == true)
            //     if (listaSegmentos) {
            //         this.state.user = {
            //             ...this.state.user, listaSegmentos
            //         }
            //     }
            // },
            handler(newValue, oldValue) {
                const listaSegmentos = JSON.parse(JSON.stringify(newValue.checkLabels)).filter((e) => e.tipo == 'Outros')
                if (listaSegmentos || listaSegmentos[0].value == true) {
                    setTimeout(() => {
                        this.scrolDown()
                    }, 300)
                }
            }
        }
    }
}
</script>


<style scoped>
.q-checkbox__label {
    color: red;
}
</style>

