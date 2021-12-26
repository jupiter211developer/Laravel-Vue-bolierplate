<template>
  <v-data-table
    :headers="headers"
    :items="businesses"
    :items-per-page="20"
    class="elevation-2 table-border"
  ></v-data-table>
</template>
<script>
export default {
  setup() {
    const headers = [
      {
        text: 'Business Name',
        align: 'center',
        sortable: false,
        value: 'business',
      },
      { text: 'Address', value: 'address', align: 'center' },
      { text: 'Visit Scans', value: 'scan', align: 'center' },
      { text: 'Receipts Scanned', value: 'receipt', align: 'center' },
      { text: 'Buzz Submitted', value: 'buzzSubmit', align: 'center' },
      { text: 'Buzz Verified', value: 'buzzVerify', align: 'center' },
      { text: 'Rewards Given', value: 'reward', align: 'center' },

    ]
    const businesses = [
      {
        business: 'Nat\'s Thai',
        address: 'Address',
        scan: 50,
        receipt: 200,
        buzzSubmit: 1329,
        buzzVerify: 1299,
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
