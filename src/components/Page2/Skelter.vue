<template>
    <!-- <div class="flex col justify-around">
        <div class="q-pa-xl" v-for="_ in 4" :key="_">
            <q-card style="max-width: 300px">
                <q-item>
                    <q-item-section avatar>
                        <q-skeleton type="QAvatar" />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>
                            <q-skeleton type="text" />
                        </q-item-label>
                        <q-item-label caption>
                            <q-skeleton type="text" />
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-skeleton height="200px" square />

                <q-card-actions align="right" class="q-gutter-md">
                    <q-skeleton type="QBtn" />
                    <q-skeleton type="QBtn" />
                </q-card-actions>
            </q-card>
        </div>
    </div> -->

    <div class="q-pa-md" v-for="i in 3" :key="i">
        <q-markup-table>
            <thead>
                <tr>
                    <th class="text-left" style="width: 150px">
                        <q-skeleton animation="blink" type="text" />
                    </th>
                    <th class="text-right">
                        <q-skeleton animation="blink" type="text" />
                    </th>
                    <th class="text-right">
                        <q-skeleton animation="blink" type="text" />
                    </th>
                    <th class="text-right">
                        <q-skeleton animation="blink" type="text" />
                    </th>
                    <th class="text-right">
                        <q-skeleton animation="blink" type="text" />
                    </th>
                    <th class="text-right">
                        <q-skeleton animation="blink" type="text" />
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="n in 5" :key="n">
                    <td class="text-left">
                        <q-skeleton animation="blink" type="text" width="85px" />
                    </td>
                    <td class="text-right">
                        <q-skeleton animation="blink" type="text" width="50px" />
                    </td>
                    <td class="text-right">
                        <q-skeleton animation="blink" type="text" width="35px" />
                    </td>
                    <td class="text-right">
                        <q-skeleton animation="blink" type="text" width="65px" />
                    </td>
                    <td class="text-right">
                        <q-skeleton animation="blink" type="text" width="25px" />
                    </td>
                    <td class="text-right">
                        <q-skeleton animation="blink" type="text" width="85px" />
                    </td>
                </tr>
            </tbody>
        </q-markup-table>
    </div>
</template>