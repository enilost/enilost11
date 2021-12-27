<template>
  <div class="wrapper__component__modal" @click.self="closeModal">
    <div class="card card-modal">
      <div class="card-modal__close" @click="closeModal">&#10006;</div>
      <form action="" class="card__form form" @submit.prevent="createTask">
        <div class="card__form__title">Создать заявку</div>
        <div class="card__form__input__box">
          <label for="modal-title" class="card__form__input__box__label"
            >заголовок<i class="card__form__input__box__label__star"
              >&#9913;</i
            ></label
          >
          <div
            class="box-input"
            :class="{
              'focus-border': isFocusTitle,
              'danger-border': $v.title.$error,
            }"
          >
            <input
              class="box-input__input"
              type="text"
              name=""
              id="modal-title"
              v-model="title"
              @focus="isFocusTitle = true"
              @blur="isFocusTitle = false"
            />
          </div>
          <span :class="$v.title.$error ? 'danger-span' : 'danger-span-hide'"
            >Заполните это поле</span
          >
        </div>
        <div class="card__form__input__box">
          <label for="modal-text" class="card__form__input__box__label"
            >текст заявки<i class="card__form__input__box__label__star"
              >&#9913;</i
            ></label
          >
          <div
            class="box-textarea"
            :class="{
              'focus-border': isFocusText,
              'danger-border': $v.text.$error,
            }"
          >
            <textarea
              class="box-textarea__text"
              name=""
              id="modal-text"
              v-model="text"
              @focus="isFocusText = true"
              @blur="isFocusText = false"
            ></textarea>
          </div>
          <span :class="$v.text.$error ? 'danger-span' : 'danger-span-hide'"
            >Заполните это поле</span
          >
        </div>
        <div class="card__form__submit__box">
          <button class="card__form__submit__box__btn" type="submit">
            Создать заявку
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import { mapActions } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "modal",
  components: {},
  props: {},
  data() {
    return {
      isFocusText: false,
      isFocusTitle: false,
      title: "",
      text: "",
    };
  },
  methods: {
    ...mapActions(["CREATE_TASK_ACTION"]),
    closeModal() {
      document.body.style.removeProperty("overflow");
      this.$emit("closeModal");
    },
    async createTask() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
      }
      let task = {
        name: this.title,
        text: this.text,
      };
      try {
        await this.CREATE_TASK_ACTION(task);
        this.title = "";
        this.text = "";
        this.$v.$reset();
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  computed: {},
  watch: {},
  validations: {
    text: { required, minLength: minLength(3) },
    title: { required, minLength: minLength(3) },
  },
  mounted() {
    
  },
  destroyed() {

  },
};
</script>

<style lang="scss" scoped>
</style>