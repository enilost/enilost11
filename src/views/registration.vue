<template>
  <div class="card card-registration" v-if="!registr_ready">
    <form action="" class="card__form form" @submit.prevent="submitForm">
      <div class="card__form__title">Регистрация</div>
      <div class="card__form__input__box">
        <label for="reg-login" class="card__form__input__box__label"
          >логин
          <i class="card__form__input__box__label__star">&#9913;</i></label
        >
        <div
          class="box-input"
          :class="{
            'focus-border': isFocusLogin,
            'danger-border': $v.form.login.$error,
          }"
        >
          <input
            class="box-input__input"
            type="text"
            name=""
            id="reg-login"
            @focus="isFocusLogin = true"
            @blur="isFocusLogin = false"
            v-model="form.login"
          />
        </div>
        <span :class="$v.form.login.$error ? 'danger-span' : 'danger-span-hide'"
          >Заполните это поле</span
        >
      </div>
      <div class="card__form__input__box">
        <label for="reg-pass" class="card__form__input__box__label"
          >пароль
          <i class="card__form__input__box__label__star">&#9913;</i></label
        >
        <div
          class="box-input"
          :class="{
            'focus-border': isFocusPass,
            'danger-border': $v.form.password.$error,
          }"
        >
          <input
            class="box-input__input"
            :type="isEye ? 'text' : 'password'"
            name=""
            id="reg-pass"
            @focus="isFocusPass = true"
            @blur="isFocusPass = false"
            v-model="form.password"
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
        <span
          :class="$v.form.password.$error ? 'danger-span' : 'danger-span-hide'"
          >Заполните это поле</span
        >
      </div>
      <div class="card__form__input__box">
        <label for="reg-pass-w" class="card__form__input__box__label"
          >повторите пароль
          <i class="card__form__input__box__label__star">&#9913;</i></label
        >
        <div
          class="box-input"
          :class="{
            'focus-border': isFocusPassW,
            'danger-border': $v.form.passwordW.$error,
          }"
        >
          <input
            class="box-input__input"
            :type="isEyeW ? 'text' : 'password'"
            name=""
            id="reg-pass-w"
            @focus="isFocusPassW = true"
            @blur="isFocusPassW = false"
            v-model="form.passwordW"
          />
          <input
            class="box-input__icon__eye"
            type="button"
            value=""
            v-if="!isEyeW"
            @click="isEyeW = true"
          />
          <input
            class="box-input__icon__eye-close"
            type="button"
            value=""
            v-if="isEyeW"
            @click="isEyeW = false"
          />
        </div>
        <span
          :class="$v.form.passwordW.$error ? 'danger-span' : 'danger-span-hide'"
          >Заполните это поле</span
        >
      </div>
      <div class="card__form__input__box">
        <label for="reg-phone" class="card__form__input__box__label"
          >телефон
          <i class="card__form__input__box__label__star">&#9913;</i></label
        >
        <div
          class="box-input"
          :class="{
            'focus-border': isFocusPhone,
            'danger-border': $v.form.phone.$error,
          }"
        >
          <input
            class="box-input__input"
            type="number"
            name=""
            id="reg-phone"
            @focus="isFocusPhone = true"
            @blur="isFocusPhone = false"
            v-model.trim="form.phone"
          />
        </div>
        <span :class="$v.form.phone.$error ? 'danger-span' : 'danger-span-hide'"
          >Заполните это поле</span
        >
      </div>
      <div class="card__form__checkbox__box">
        <label class="checkbox__flex" for="form__check">
          <input
            class="card__form__checkbox"
            type="checkbox"
            name=""
            id="form__check"
            v-model.trim="form.checked"
          />
          <label class="custom-checkbox" for="form__check"></label>
          <span class="card__form__checkbox__text">
            Я согласен на обработку моих данных
          </span>
        </label>
        <span
          :class="
            !form.checked && $v.$dirty ? 'danger-span' : 'danger-span-hide'
          "
          >Заполните это поле</span
        >
      </div>
      <div class="card__form__submit__box">
        <button class="card__form__submit__box__btn" type="submit">
          Зарегистрироваться
        </button>
      </div>
      <div class="card__form__link__box">
        <a
          href="#"
          class="card__form__link__box__a"
          @click.prevent="$router.push({ name: 'login' })"
          >Войти</a
        >
      </div>
    </form>
  </div>
  <ready v-else></ready>
</template>

<script>
import ready from "../components/registretion_ready.vue";
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "registration",
  components: {
    ready,
  },
  props: {},
  data() {
    return {
      registr_ready: false,
      isFocusLogin: false,
      isFocusPass: false,
      isFocusPassW: false,
      isFocusPhone: false,
      isEye: false,
      isEyeW: false,
      form: {
        login: "",
        password: "",
        passwordW: "",
        phone: null,
        checked: false,
      },
    };
  },
  methods: {
    ...mapActions(["REGISTRATION_ACTION"]),
    async submitForm() {
      this.$v.$touch();
      if (this.$v.$error || !this.form.checked) {
        return;
      }
      let regForm = {
        login: this.form.login,
        password: this.form.password,
        phone: this.form.phone,
      };
      try {
        await this.REGISTRATION_ACTION(regForm);
        this.registr_ready = true;
      } catch (error) {
        console.log(error);
        throw error
      }
    },
  },
  computed: {},
  watch: {},
  validations: {
    form: {
      login: { required, minLength: minLength(2) },
      password: { required, minLength: minLength(6) },
      passwordW: { required, sameAsPass: sameAs("password") },
      phone: { required, minLength: minLength(2) },
    },
  },
  mounted() {},
};
</script>
<style lang="scss">

</style>
