<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div class="sw-c-logo-wrapper">
            <img class="sw-u-height-full" src="~assets/logo-white.png" />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { version } from 'ui' // "ui" is aliased in quasar.conf.js

export default {
  name: 'MyLayout',

  setup () {
    return {
      version
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Arima Madurai';
}

.sw-c-header {
  /* background-color: $color-gray-03; */
  height: 62px;
}

.sw-c-header-content {
  height: 100%;
}

.sw-c-logo-wrapper {
  height: 40px;
}

.sw-u-height-full {
  height: 100%;
}

.forgottenPass {
  margin-top: 0px !important;
  margin-left: -3px !important;
  cursor: pointer;
  color: #40c4ff
}
</style>
