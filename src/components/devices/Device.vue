<template>
  <div class="device" v-on:click="execute();">
    <div class="content">
      <p class="name">
        <i class="icon" v-bind:class="[data.state ? 'active':'', device.fa_icon]"></i>
        <span>{{ device.name }}</span>
        <span v-if="data.state"><Timer v-bind:updatedAt="updatedAt" class="text-grey-dark"/></span>
      </p>
      <div class="flex">
        <div class="w-2/3 mx-auto">
        <div class="stats mt-4">
          <p class="description mb-4 text-lg" style="padding: 0.344rem 0;" v-if="!data.state">
            <span>Down for</span>
            <Timer v-bind:updatedAt="updatedAt"/>
          </p>
          <p class="description">
            <span>Today</span>
            {{ activeToday }}
          </p>
        </div>
          <div class="stats" v-if="showStats">
            <p class="description">
              <span>This week</span>
              {{ activeThisWeek }}
            </p>
            <p class="description" v-if="data.active_this_week != data.active_this_month">
              <span>This month</span>
               {{ activeThisMonth }}
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
        @apply text-yellow-dark;
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
import Axios from 'axios';
import Timer from '@/components/devices/assets/Timer.vue';

export default {
  props: ['device', 'showStats'],
  components: {
    Timer,
  },
  data() {
    return {

      isLoading: false,

      data: {
        name: this.device.name,
        state: this.device.state,
        updated_at: this.device.updated_at,
        active_today: this.device.active_today,
        active_this_week: this.device.active_this_week,
        active_this_month: this.device.active_this_month,
      },
    };
  },

  mounted() {
    setInterval(() => {
      this.update();
    }, 5000);
  },

  computed: {
    updatedAt() {
      // Converting from seconds(Unix) to milliseconds
      return new Date(this.data.updated_at * 1000).getTime();
    },
    activeToday() {
      return `${this.formatSeconds('hours', this.data.active_today)}h ${this.formatSeconds('minutes', this.data.active_today)}m`;
    },
    activeThisWeek() {
      return `${this.formatSeconds('hours', this.data.active_this_week)}h ${this.formatSeconds('minutes', this.data.active_this_week)}m`;
    },
    activeThisMonth() {
      return `${this.formatSeconds('hours', this.data.active_this_month)}h ${this.formatSeconds('minutes', this.data.active_this_month)}m`;
    },
  },

  methods: {
    execute() {
      this.isLoading = true;

      Axios.put(`${this.$API_LOCATION}devices/${this.device.id}`, {
        state: this.data.state ? 0 : 1,
      }).then((response) => {
        this.data.state = response.data.data.state;
        this.data.updated_at = response.data.data.updated_at;
        this.isLoading = false;
      }).catch(() => {
        console.log('Failed to execute device!');
        this.isLoading = false;
      });
    },

    update() {
      Axios.get(`${this.$API_LOCATION}devices/${this.device.id}`)
        .then((response) => {
          this.data = response.data.data;
        }).catch(() => {
          console('Failed to update device!');
        });
    },

    formatSeconds($format, $seconds) {
      if ($format === 'hours') {
        return Math.trunc($seconds / 3600);
      }

      if ($format === 'minutes') {
        return Math.trunc(($seconds / 60) % 60);
      }

      return 'Format not supported';
    },
  },
};
</script>
