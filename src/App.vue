<template>
  <div id="app">
    <router-view :store="$store" @login="onLogin"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    onLogin (username) {
      this.connect(username)
    },
    changeTheme (theme) {
      this.store.theme = theme
      document.body.setAttribute('class', '')
      document.body.classList.add(`theme-${theme}`)
    }
  }
}
</script>

<style lang="scss">
    @import 'styles/main.scss';
</style>
