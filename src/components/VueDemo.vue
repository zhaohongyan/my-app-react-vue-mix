<template>
  <div class="con">
    <span>Hello from Vue!!!</span>
    <span>count: {{ count }}</span>
    <button @click="clickMe()">add</button>
  </div>
</template>
<script>
export default {
  name: "Testing",
  methods: {
    clickMe() {
      this.count++;
    },
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<style css>
.con {
  padding: 40px;
  border-bottom: 1px solid #eee;
}
</style>