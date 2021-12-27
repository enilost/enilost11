<template>
  <div id="app">
    <layout>
      <router-view/>
    </layout>
  </div>
</template>

<script>
import layout from "./components/layout.vue";

export default {
  name: "app",
  components: { 
    layout,
   },
  props: {},
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  watch: {},
  mounted() {
  },
};
</script>
<style lang="scss">
.box-input__icon__eye-close,
.box-input__icon__eye {
  cursor: pointer;
}
input {
  min-width: 0;
}
</style>
