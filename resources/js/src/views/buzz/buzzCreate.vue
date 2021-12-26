<template>
  <v-row class="d-flex justify-center">
    <!-- <v-card cols="12"> -->
      <v-col cols="6">
        <buzz-form></buzz-form>
      </v-col>
    <!-- </v-card> -->
  </v-row>
</template>

<script>

  import BuzzForm from './buzzForm.vue'
  import { mdiMagnify, mdiBellOutline, mdiGithub, mdiPlusCircle } from '@mdi/js'


  export default {
    components: {
      BuzzForm,
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
      
    }
  }
</script>
