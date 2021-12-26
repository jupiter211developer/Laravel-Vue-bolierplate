<template>
  <v-data-table
    :headers="headers"
    :items="businesses"
    :items-per-page="20"
    class="elevation-2 table-border"
  >
    <template v-slot:item.upload="{ item }">
      <v-img
        :aspect-ratio="16/9"
        src="/img/logo.png"
        max-width="120"
        height="38"
      ></v-img>
    </template>
  </v-data-table>
</template>
<script>
export default {
  setup() {
    const headers = [
      {
        text: 'User Account',
        align: 'center',
        sortable: false,
        value: 'account',
      },
      { text: 'Business name', value: 'business', align: 'center' },
      { text: 'Address', value: 'address', align: 'center' },
      { text: 'Visits Scans', value: 'visitScan', align: 'center' },
      { text: 'Copy of receipts Scanned of Uploaded', value: 'upload', align: 'center' },
      { text: 'Rewards', value: 'reward', align: 'center' },
    ]

    const businesses = [
      {
        account: '@myusername',
        business: '@Nat\'s Thai',
        address: '-',
        visitScan: '-',
        upload: '/img/Vector.png',
        reward: 500
      },
    ]

    return {
      headers,
      businesses,
    }
  },
}
</script>
