<template>
  <div class="card card-login">
    <form action="" class="card__form form" @submit.prevent="submitForm">
      <div class="card__form__title">Авторизация</div>
      <div class="card__form__input__box">
        <label for="auth-login" class="card__form__input__box__label"
          >логин
          <i class="card__form__input__box__label__star">&#9913;</i></label
        >
        <div
          class="box-input"
          :class="{
            'focus-border': isFocusLogin,
            'danger-border': $v.login.$error,
          }"
        >
          <input
            class="box-input__input"
            type="text"
            name=""
            id="auth-login"
            @focus="isFocusLogin = true"
            @blur="isFocusLogin = false"
            v-model="login"
          />
        </div>
        <span :class="$v.login.$error ? 'danger-span' : 'danger-span-hide'"
          >Заполните это поле</span
        >
      </div>
      <div class="card__form__input__box">
        <label for="ayth-pass" class="card__form__input__box__label"
          >пароль
          <i class="card__form__input__box__label__star">&#9913;</i></label
        >
        <div
          class="box-input"
          :class="{
            'focus-border': isFocusPass,
            'danger-border': $v.password.$error,
          }"
        >
          <input
            class="box-input__input"
            :type="isEye ? 'text' : 'password'"
            name=""
            @focus="isFocusPass = true"
            @blur="isFocusPass = false"
            id="ayth-pass"
            v-model="password"
          />
          <input
            class="box-input__icon__eye"
            type="button"
            value=""
            v-if="!isEye"
            @click="isEye = true"
          />
          <input
            class="box-input__icon__eye-close"
            type="button"
            value=""
            v-if="isEye"
            @click="isEye = false"
          />
        </div>
        <span :class="$v.password.$error ? 'danger-span' : 'danger-span-hide'"
          >Заполните это поле</span
        >
      </div>
      <div class="card__form__submit__box">
        <button class="card__form__submit__box__btn" type="submit">
          Войти
        </button>
      </div>
      <div class="card__form__link__box">
        <a
          href="#"
          class="card__form__link__box__a"
          @click.prevent="$router.push({ name: 'registration' })"
          >Зарегистрироваться</a
        >
      </div>
    </form>
  </div>
</template>

<script>

import { required, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "login",
  components: {},
  props: {},
  data() {
    return {
      isFocusLogin: false,
      isFocusPass: false,
      isEye: false,
      login: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["LOGIN_ACTION"]),
    async submitForm() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
      }
      let logForm = {
        login: this.login,
        password: this.password,
      };
      try {
        await this.LOGIN_ACTION(logForm);
        this.$router.push({ name: "tasks" });
      } catch (error) {
          console.log(error);
          throw error
      }
    },
  },
  computed: {},
  watch: {},
  validations: {
    login: { required, minLength: minLength(2) },
    password: { required, minLength: minLength(6) },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>