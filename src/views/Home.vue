<template>
  <v-container grid-list-md fluid fill-height>
    <v-layout row wrap>
      <v-flex xs4>
        <Device></Device>
      </v-flex>
      <v-flex xs4>
        <Device></Device>
      </v-flex>
      <v-flex xs4>
        <Device></Device>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Device from '@/components/devices/Device';

export default {
  components: {
    Device,
  }
}
</script>
