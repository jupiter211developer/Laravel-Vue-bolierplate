<template>
  <v-app>
    <vertical-nav-menu :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu>

    <v-app-bar
      app
      flat
      absolute
      color="transparent"
    >
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <v-app-bar-nav-icon
            class="d-block d-lg-none me-2"
            @click="isDrawerOpen = !isDrawerOpen"
          ></v-app-bar-nav-icon>
          <img src="/img/logo.png" width="120" height="38"/>

          <v-spacer></v-spacer>

          <!-- Right Content -->
          <!-- <a
            href="https://github.com/themeselection/materio-vuetify-vuejs-laravel-admin-template-free"
            target="_blank"
            rel="nofollow"
          >
            <v-icon class="ms-6 me-4">
              {{ icons.mdiGithub }}
            </v-icon>
          </a> -->
          <!-- <theme-switcher></theme-switcher> -->
          <v-btn
            icon
            large
            class="ms-3"

          >
            <v-avatar
              color="indigo"
              size="36"
            >
              <v-img
                :src="require('@/layouts/components/icons/uk.svg').default"
                max-height="20px"
                max-width="20px"
                alt="logo"
                contain
              ></v-img>
            </v-avatar>
          </v-btn>
          
          <v-btn
            icon
            large
            class="ms-3"

          >
            <v-badge class="bell-badge" color="#2F2B34" content="2" aria-setsize="2px">
              
              <v-img
                :src="require('@/layouts/components/icons/bell.svg').default"
                max-height="20px"
                max-width="20px"
                alt="logo"
                contain
              ></v-img>
            </v-badge>
          </v-btn>

          <v-btn
            icon
            large
            class="ms-3"

          >
            <v-img
              :src="require('@/layouts/components/icons/cil_settings.svg').default"
              max-height="20px"
              max-width="20px"
              alt="logo"
              contain
            ></v-img>
          </v-btn>
          <v-btn
            icon
            large
            class="ms-3"
          >
            <v-img
              :src="require('@/layouts/components/icons/user.svg').default"
              max-height="20px"
              max-width="20px"
              alt="logo"
              contain
            ></v-img>
          </v-btn>

          <!-- <app-bar-user-menu></app-bar-user-menu> -->
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <div class="app-content-container boxed-container pa-6">
        <slot></slot>
      </div>
    </v-main>

    <v-footer
      app
      inset
      color="transparent"
      absolute
      height="56"
      class="px-0"
    >
      <!-- <div class="boxed-container w-full">
        <div class="mx-6 d-flex justify-space-between">
          <span>
            &copy; 2021 <a
              href="https://themeselection.com"
              class="text-decoration-none"
              target="_blank"
            >ThemeSelection</a></span>
          <span class="d-sm-inline d-none">
            <a
              href="https://themeselection.com/products/category/download-free-admin-templates/"
              target="_blank"
              class="me-6 text--secondary text-decoration-none"
            >Freebies</a>
            <a
              href="https://themeselection.com/blog/"
              target="_blank"
              class="me-6 text--secondary text-decoration-none"
            >Blog</a>
            <a
              href="https://github.com/themeselection/materio-vuetify-vuejs-laravel-admin-template-free/blob/main/LICENSE"
              target="_blank"
              class="text--secondary text-decoration-none"
            >MIT Licence</a>
          </span>
        </div>
      </div> -->
    </v-footer>
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMagnify, mdiBellOutline, mdiGithub, mdiAlarmBell } from '@mdi/js'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'

export default {
  components: {
    VerticalNavMenu,
    ThemeSwitcher,
    AppBarUserMenu,
  },
  setup() {
    const isDrawerOpen = ref(null)

    return {
      isDrawerOpen,
      icons: {
        mdiMagnify,
      },
    }
  },
}
</script>

<style lang="scss">
  .v-app-bar ::v-deep {
    .v-toolbar__content {
      padding: 0;

      .app-bar-search {
        .v-input__slot {
          padding-left: 18px;
        }
      }
    }
  }

  .boxed-container {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }

  .bell-badge {
    $badge-font-size: 4px !important;
  }
  
  .table-border {
    td, th {
      border: 1px solid rgba(119, 121, 137, 0.2) !important;
    }
  }
</style>
