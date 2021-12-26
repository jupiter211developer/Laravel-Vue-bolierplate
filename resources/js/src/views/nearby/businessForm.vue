<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <h2 for="passwordHorizontalIcons" style="color:black;">Manually Enter info and address</h2>
        </v-col>
        <v-row>
          <v-col cols="6" md="6">
            <v-col cols="12" md="12">
              <v-text-field
                id="firstnameHorizontalIcons"
                v-model="firstname"
                :prepend-inner-icon="icons.mdiAccountOutline"
                outlined
                placeholder="Name"
                hide-details
              >
                <v-img
                  :aspect-ratio="16/9"
                  src="/img/logo.png"
                  max-width="38"
                  height="38"
                ></v-img>
              </v-text-field>
            </v-col>
          </v-col>
          <v-col cols="6" md="6">
            <v-col cols="12" md="12">
              <v-text-field
                id="firstnameHorizontalIcons"
                v-model="firstname"
                :prepend-inner-icon="icons.mdiAccountOutline"
                outlined
                placeholder="Address"
                hide-details
              ></v-text-field>
            </v-col>
          </v-col>
        </v-row>

        <v-col cols="12" md="12">
          <v-text-field
            id="emailHorizontalIcons"
            v-model="email"
            :prepend-inner-icon="icons.mdiEmailOutline"
            outlined
            placeholder="Upload File"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            id="mobileHorizontalIcons"
            v-model="mobile"
            outlined
            :prepend-inner-icon="icons.mdiCellphone"
            placeholder="Category"
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
