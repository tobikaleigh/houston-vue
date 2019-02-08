<template>
  <div class="device" v-on:click="execute();">
    <div class="content">
      <p class="name">
        <i class="icon" v-bind:class="[data.state ? 'active':'', device.fa_icon]"></i>
        <span>{{ device.name }}</span>
        <span v-if="data.state"><Timer v-bind:updatedAt="updatedAt"/></span>
      </p>
      <div class="flex">
        <div class="w-2/3 mx-auto">
          <div class="stats mt-4" v-if="showStats">
            <p class="description" v-if="!data.state">
              <span>Down for</span>
              <Timer v-bind:updatedAt="updatedAt"/>
            </p>
            <p class="description">
              <span>This Week</span>
              N/A
            </p>
            <p class="description">
              <span>This month</span>
              N/A
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" v-bind:class="{'active': data.state}">
      <p v-if="!isLoading">{{ data.state ? 'Active':'Inactive' }}</p>
      <p v-else><i class="fas fa-spinner fa-spin"></i></p>
    </div>
  </div>
</template>

<style lang="scss">
.device {
  @apply w-full bg-blue-darkest cursor-pointer;

  &:active {
    @apply bg-indigo-darkest;

    .footer {
      @apply bg-green-dark;
    }
  }

  .content {
    @apply py-12 px-6;
  }

  p.name {
    @apply text-center;

    i.icon {
      @apply block;
      font-size: 60pt;

      &.active {
        @apply text-yellow;
      }
    }

    span {
      @apply block mt-5 text-2xl;
    }
  }

  .stats {
    p.description {
      @apply text-white text-center;

      span {
        @apply text-grey-dark mr-1;
      }
    }
  }

  .footer {
    @apply text-center py-4 uppercase bg-blue-dark;

    &.active {
      @apply bg-green;
    }
  }

}
</style>

<script>
import moment from 'moment';
import Axios from 'axios';
import Timer from '@/components/devices/assets/Timer.vue';

export default {
  props: ['device', 'showStats'],
  components: {
    Timer,
  },
  data: function() {
    return {

      isLoading: false,

      data: {
        name: this.device.name,
        state: this.device.state,
        updated_at: this.device.updated_at
      },
    }
  },

  computed: {
    updatedAt: function() {
      return new Date(this.data.updated_at*1000).getTime(); //Converting from seconds(Unix) to milliseconds
    },
  },

  methods: {
    execute: function() {
      this.isLoading = true;
      
      Axios.put(this.$API_LOCATION+'devices/'+this.device.id, {
        state: this.data.state ? 0:1,
      }).then((response) => {
        this.data.state = response.data.data.state;
        this.data.updated_at = response.data.data.updated_at;
        this.isLoading = false;
      }).catch((error) => {
        console.log('failed!');
        this.isLoading = false;
      });
    },
  },
}
</script>


