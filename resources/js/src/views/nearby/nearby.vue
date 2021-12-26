<template>
  <v-row>
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
        <near-table></near-table>
      </v-col>
    </v-row>
    <!-- <div id="app1">
      <myiconname></myiconname>
    </div> -->
  </v-row>
</template>

<script>
  import NearTable from './NearTable.vue'
  import { mdiMagnify, mdiBellOutline, mdiGithub, mdiPlusCircle } from '@mdi/js'

  export default {
    components: {
      NearTable,
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

  // Vue.component("my-icon", {
  //   template: `<svg height="24" width="24"><circle cx="12" cy="12" r="9" fill="red" /></svg>`
  // });

  // const vuetifyOpts = {
  //   icons: {
  //     iconfont: "mdi",
  //     values: {
  //       myicon: {
  //         component: "my-icon"
  //       },
  //     }
  //   }
  // };

  // new Vue({
  //   el: "#app1",
  //   vuetify: new Vuetify(vuetifyOpts),
  //   data: function() {
  //     return {
  //       myiconname: "$vuetify.icons.myicon",
  //       goodiconname: "$vuetify.icons.ratingFull"
  //     };
  //   }
  // });
  
</script>

