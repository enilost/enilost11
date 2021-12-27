<template>
  <div class="wrapper__component__tasks__task">
    <div class="wrapper__component__tasks__task__title">
      <h3 class="wrapper__component__tasks__task__title__h3">
        {{t.name}}
      </h3>
    </div>
    <div class="wrapper__component__tasks__task__text">
      <p class="wrapper__component__tasks__task__text__p">
          {{t.text_task}}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "task",
  components: {},
  props: {
      t:{
          type: Object,
          default(){
              return {}
          }
      }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {
  },
};
</script>

<style lang="scss" >
</style>