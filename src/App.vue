<template>
  <div id="app">
    <!-- <button type="button" name="button" @click="changeTheme('jungle')">Changer de theme</button>
    <button type="button" name="button" @click="changeTheme('ocean')">Changer de theme</button>
    <button type="button" name="button" @click="changeTheme('banquise')">Changer de theme</button> -->
    <router-view :store="$store" @login="onLogin"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    onLogin (username) {
      this.connect(username)
    }
    // changeTheme (theme) {
    //   this.store.theme = theme
    //   document.body.setAttribute('class', '')
    //   document.body.classList.add(`theme-${theme}`)
    // }
  }
}
</script>

<style lang="scss">
    @import 'styles/main.scss';
    @import 'styles/font-awesome.css';
</style>
