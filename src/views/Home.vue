<template>
<div>
  <div class="flex">
    <div class="flex-1">
      <h1>Devices</h1>
    </div>
    <div class="flex-1 text-right">
      <button type="button" v-on:click="showStats = !showStats">
        {{ showStats ? 'Hide stats':'Show stats' }}
      </button>
    </div>
  </div>

  <div class="flex -mx-5">
    <div class="px-5 w-full">
      <div class="devices">
        <div class="flex -mx-2">
          <div class="px-2 w-1/3" v-for="device in devices">
            <Device v-bind:device="device" v-bind:showStats="showStats"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.devices {
  @apply mt-6;  
}
</style>


<script>
import Device from '@/components/devices/Device.vue';
import Axios from 'axios';

export default {
  name: 'home',
  components: {
    Device,
  },
  data: function() {
    return {
      showStats: true,

      devices: {},
    }
  },

  created: function() {
    this.getDevices();
  },

  methods: {
    getDevices: function() {
      Axios.get(this.$API_LOCATION+'devices')
        .then((response) => {
          this.devices = response.data.data;
        }).catch(e => {
          alert('Error: '+error.data.msg);
        });
    }
  },
};
</script>
