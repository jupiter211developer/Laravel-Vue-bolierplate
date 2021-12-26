<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <label for="firstnameHorizontalIcons">Account</label>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            id="firstnameHorizontalIcons"
            v-model="firstname"
            :prepend-inner-icon="icons.mdiAccountOutline"
            outlined
            placeholder="User Name"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <label for="mobileHorizontalIcons">Description</label>
        </v-col>

        <v-col cols="12" md="12">
          <v-textarea
            auto-grow
            outlined
            rows="3"
            row-height="32"
            placeholder="Type here"
          ></v-textarea>
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
          <v-btn color="primary" x-large block>
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
}
</script>
