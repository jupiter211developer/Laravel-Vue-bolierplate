<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    app
    floating
    width="260"
    class="app-navigation-menu"
    
    @input="val => $emit('update:is-drawer-open', val)"
  >
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <router-link to="/" class="d-flex align-center text-decoration-none">
        <v-slide-x-transition>
          <h2 class="app-title">ADMIN PANEL</h2>
        </v-slide-x-transition>
      </router-link>
    </div>

    <!-- Navigation Items -->
    <v-list expand class="vertical-nav-menu-items">
      <nav-menu-link title="Buzz" :to="{ name: 'buzz' }" icon='/img/svg/buzz.svg'></nav-menu-link>
      <nav-menu-link title="Nearby" :to="{ name: 'nearby' }" icon='/img/svg/nearby.svg'></nav-menu-link>
      <nav-menu-link title="Scan" :to="{ name: 'scan' }" icon='/img/svg/scan.svg'></nav-menu-link>
      <nav-menu-link title="Rewards" :to="{ name: 'reward' }" icon='/img/svg/reward.svg'></nav-menu-link>
      <nav-menu-link title="More" :to="{ name: 'more' }" icon='/img/svg/more.svg'></nav-menu-link>
    </v-list>
    
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiHomeOutline,
  mdiAlphaTBoxOutline,
  mdiEyeOutline,
  mdiCreditCardOutline,
  mdiTable,
  mdiFileOutline,
  mdiFormSelect,
  mdiAccountCogOutline,
} from '@mdi/js'
import NavMenuSectionTitle from './components/NavMenuSectionTitle.vue'
import NavMenuGroup from './components/NavMenuGroup.vue'
import NavMenuLink from './components/NavMenuLink.vue'


export default {
  components: {
    NavMenuSectionTitle,
    NavMenuGroup,
    NavMenuLink,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
  },
  setup() {
    return {
      icons: {
        mdiHomeOutline,
        mdiAlphaTBoxOutline,
        mdiEyeOutline,
        mdiCreditCardOutline,
        mdiTable,
        mdiFileOutline,
        mdiFormSelect,
        mdiAccountCogOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@resources/sass/preset/mixins.scss';

.app-title {
  color:white !important;
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}

.app-navigation-menu {
  .v-list-item {
    border-bottom-right-radius: 0px !important;
    border-top-right-radius: 0px !important;
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
