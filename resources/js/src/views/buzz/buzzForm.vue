<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <label for="firstnameHorizontalIcons">Business Partner Username</label>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            id="firstnameHorizontalIcons"
            v-model="firstname"
            :prepend-inner-icon="icons.mdiAccountOutline"
            outlined
            placeholder="Business Name"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <label for="emailHorizontalIcons">Social Media</label>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field
            id="emailHorizontalIcons"
            v-model="email"
            :prepend-inner-icon="icons.mdiEmailOutline"
            outlined
            
            placeholder="Facebook, instagram, twitter"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <label for="mobileHorizontalIcons">Post Instruction with link</label>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field
            id="mobileHorizontalIcons"
            v-model="mobile"
            outlined
            :prepend-inner-icon="icons.mdiCellphone"
            
            placeholder="Facebook, instagram, twitter"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <label for="passwordHorizontalIcons">Token Reward</label>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field
            id="passwordHorizontalIcons"
            v-model="password"
            :prepend-inner-icon="icons.mdiLockOutline"
            type="number"
            outlined
            placeholder="50"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-btn color="primary" x-large block @click="buzzClick">
            Save
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import axios from 'axios'

export default {
  setup() {
    const firstname = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(false)

    return {
      firstname,
      email,
      mobile,
      password,
      checkbox,

      // icons
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCellphone,
        mdiLockOutline,
      },
    }

    
  },
  methods: {
    buzzClick() {
      axios.post('/api/login', { email: 'sdf', password: 'sdf' })
        .then(res => {
          alert('click')
        })
        .catch(err => {
          alert(err.message)
        })
    }
  }
}
</script>
