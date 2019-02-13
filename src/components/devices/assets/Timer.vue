<template>
  <div class="inline-block">
    {{ hours | twoDigits }}:{{ minutes | twoDigits }}:{{ seconds | twoDigits }}
  </div>
</template>

<script>
export default {
  props: ['updatedAt'],
  data() {
    return {
      now: new Date().getTime(),
    };
  },
  mounted() {
    setInterval(() => {
      this.now = new Date().getTime();
    }, 1000);
  },
  computed: {
    updatedAtInSeconds() {
      return this.updatedAt / 1000;
    },
    nowInSeconds() {
      return this.now / 1000;
    },
    seconds() {
      return Math.trunc(this.nowInSeconds - this.updatedAtInSeconds) % 60;
    },
    minutes() {
      return Math.trunc((this.nowInSeconds - this.updatedAtInSeconds) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.nowInSeconds - this.updatedAtInSeconds) / 3600);
    },
  },
  filters: {
    twoDigits(value) {
      if (value < 1) {
        return '00';
      }
      if (value < 10) {
        return `0${value}`;
      }
      return value;
    },
  },

};
</script>
