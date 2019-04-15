<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title>
        <span class="grey--text text--darken-3"><v-icon color="grey darken-3">track_changes</v-icon> Houston Control Center</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
          <router-view></router-view>
      </v-container>
    </v-content>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        color="white"
        flat
        @click="navigateTo('devices')"
      >
        <span>Devices</span>
        <v-icon>dashboard</v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        @click="navigateTo('about')"
      >
        <span>Statistics</span>
        <v-icon>trending_up</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
    }
  }
</script>