<template>
  <v-list-item class="vertical-nav-menu-link" style="border-bottom-right-radius: 0px !important;border-top-right-radius: 0px !important;" v-bind="$attrs" active-class="white--text">
    <v-list-item-icon>
      <v-img
        :src="icon"
        max-height="20px"
        max-width="20px"
        alt="logo"
        contain
      ></v-img>
    </v-list-item-icon>

    <v-list-item-title>
      {{ title }}
    </v-list-item-title>
  </v-list-item>
</template>

<script>
import { mdiCheckboxBlankCircleOutline } from '@mdi/js'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '/img/svg/uk.svg',
    },
  },
  setup() {
    return {
      alternateIcon: mdiCheckboxBlankCircleOutline,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@resources/sass/preset/mixins.scss';
.alternate-icon-small {
  color: #ffffff !important;
  font-size: 14px;
  height: 14px;
  width: 14px;
}

.vertical-nav-menu-link {
  border-bottom-right-radius: 0px !important;
  border-top-right-radius: 0px !important;
  &.v-list-item--active {
    border-bottom-right-radius: 0px !important;
    border-top-right-radius: 0px !important;
    background: linear-gradient(90deg, #5FCF69 37.97%, #4997CF 100%);
    // @include elevationTransition();
  }
}
</style>
