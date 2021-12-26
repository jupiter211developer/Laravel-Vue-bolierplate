<template>
  <v-row class="d-flex justify-center">
    <!-- <v-card cols="12"> -->
      <v-col cols="6">
        <business-form></business-form>
      </v-col>
    <!-- </v-card> -->
  </v-row>
</template>

<script>

  import BusinessForm from './businessForm.vue'
  import { mdiMagnify, mdiBellOutline, mdiGithub, mdiPlusCircle } from '@mdi/js'


  export default {
    components: {
      BusinessForm,
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
        this.$router.push('/businessCreate')
      }
    }
  }
</script>
