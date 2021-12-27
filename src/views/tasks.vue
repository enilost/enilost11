<template>
  <div class="wrapper__component__tasks">
    <div class="wrapper__component__tasks__title">
      <h1 class="wrapper__component__tasks__title__h1">Список заявок</h1>
    </div>
    <div>
      <task v-for="(t, i) in TASKS_GETT" :key="i" :t="t"></task>
    </div>
    <div class="wrapper__component__tasks__add-task">
      <button
        class="wrapper__component__tasks__add-task__btn"
        @click="showModal"
      >
        Создать заявку
      </button>
    </div>
    <keep-alive>
      <modal @closeModal="closeModal" v-if="isShowModal"></modal>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import modal from "../components/modal.vue";
import task from "../components/task.vue";

export default {
  name: "tasks",
  components: {
    modal,
    task,
  },
  props: {},
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    showModal() {
      document.body.style.overflow = "hidden";
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
  },
  computed: {
    ...mapGetters(["TASKS_GETT"]),
  },
  watch: {},
  mounted() {},
};
</script>

<style lang="scss" >
</style>