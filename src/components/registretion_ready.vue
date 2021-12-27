<template>
  <div class="card card-ready">
    <div class="card__form__title">Готово!</div>
    <div class="card__form__ready__text">
      <p>
        Вы успешно зарегистрировались!<br />
        Теперь вы можете войти.
      </p>
    </div>

    <div class="card__form__ready__link">
      <a
        href="#"
        class="card__form__ready__link__a"
        @click.prevent="$router.push({ name: 'login' })"
        >Войти</a
      >
    </div>
  </div>
</template>

<script>

export default {
  name: "ready",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>