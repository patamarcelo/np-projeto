<template>
    <div class="q-pa-md">
        <q-markup-table>
            <thead>
                <q-card-section>
                    <q-skeleton type="rect" />
                </q-card-section>
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

                </tr>
            </tbody>
        </q-markup-table>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>