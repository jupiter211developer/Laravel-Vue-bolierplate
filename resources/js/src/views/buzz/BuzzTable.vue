<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="20"
    class="elevation-2 table-border"
  ></v-data-table>
</template>
<script>
export default {
  setup() {
    const headers = [
      {
        text: 'Account username',
        align: 'center',
        sortable: false,
        value: 'username',
      },
      { text: 'Business partner name', value: 'partner', align: 'center' },
      { text: 'Link Instruction', value: 'instruction', align: 'center' },
      { text: 'Token Reward', value: 'Token', align: 'center' },
      { text: 'Submitted', value: 'Submitted', align: 'center' },
      { text: 'Verify', value: 'Verify', align: 'center' },
    ]
    const users = [
      {
        username: 'Frozen Yogurt',
        partner: 159,
        instruction: 6,
        Token: 24,
        Submitted: 4,
        Verify: 4,
      },
    ]

    return {
      headers,
      users,
    }
  },
}
</script>

