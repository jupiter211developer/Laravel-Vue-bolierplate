<template>
  <v-row class="buzz-container">
    <v-row class="d-flex justify-space-between">
      <v-col cols="3">
        <v-text-field
          dense
          outlined
          :prepend-inner-icon="icons.mdiMagnify"
          placeholder="By Country/Zipcode"
        ></v-text-field>
      </v-col>
      <v-col class="d-flex justify-end" cols="3">
        <v-btn @click="addEntry">
          <v-icon dark left>
            {{ icons.mdiPlusCircle }}
          </v-icon>Add new entry
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <buzz-table></buzz-table>
      </v-col>
    </v-row>
  </v-row>
</template>
<script>

  import BuzzTable from './BuzzTable.vue'
  import { mdiMagnify, mdiBellOutline, mdiGithub, mdiPlusCircle } from '@mdi/js'


  export default {
    components: {
      BuzzTable,
    },
    setup() {
      return {
        icons: {
          mdiMagnify,
          mdiBellOutline,
          mdiGithub,
          mdiPlusCircle
        },
      }
    },
    methods: {
      addEntry() {
        this.$router.push('/buzzCreate')
      }
    }
  }
</script>
