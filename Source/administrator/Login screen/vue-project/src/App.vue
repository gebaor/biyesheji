<template>
  <div>
<emp-view></emp-view>
  </div>
</template>

<script>
//import ElementView from './views/element/ElementView.vue';
import EmpView from './views/tlias/EmpView.vue';
export default {
  components: {  EmpView },
  data() {
    return {
      message: "hello vue",
    }
  },
  methods: {},
};
</script>

<style>
</style>
