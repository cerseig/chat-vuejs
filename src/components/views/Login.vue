<template>
  <main class="login">
      <div class="content-login">
          <h1>Bonbec'</h1>
          <form @submit.prevent="onSubmit">
              <p class="error" v-if="error">The username is invalid</p>
              <input type="text" placeholder="Username" v-model="username">
              <br><div class="avatar-choice" v-on:click="openPopup">Choose an avatar</div>
              <div class="content-avatars">
                <!-- <div v-on:click="closePopup" class="closePopup">close</div> -->
                <button class="log" title="Se connecter"><i class="fa fa-arrow-right"></i></button>
                  <h2>Choose your avatar</h2>
                  <div class="avatars">
                    <div class="avatars-list">
                      <div class="row">
                        <label>
                          <input type="radio" name="avatars" value="poulpe" @click="changeTheme('ocean')"/>
                          <img src="../../assets/poulpe.png">
                        </label>
                        <label>
                          <input type="radio" name="avatars" value="toucan" @click="changeTheme('jungle')"/>
                          <img src="../../assets/toucan.png">
                        </label>
                        <label>
                          <input type="radio" name="avatars" value="pinguin" @click="changeTheme('banquise')"/>
                          <img src="../../assets/pinguin.png">
                        </label>
                      </div>
                      <div class="row">
                        <label>
                          <input type="radio" name="avatars" value="renard" @click="changeTheme('foret')"/>
                          <img src="../../assets/renard.png">
                        </label>
                        <label>
                          <input type="radio" name="avatars" value="chameau" @click="changeTheme('desert')"/>
                          <img src="../../assets/chameau.png">
                        </label>
                        <label>
                          <input type="radio" name="avatars" value="crocodile" @click="changeTheme('marecage')"/>
                          <img src="../../assets/crocodile.png">
                        </label>
                      </div>
                    </div>
                  </div>
              </div>
          </form>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      error: false,
      username: ''
    }
  },
  methods: {
    onSubmit (e) {
      // Validation
      if (!this.username.match(/^\w{1,15}$/)) {
        this.error = true
      } else {
        this.error = false
        this.$emit('login', this.username)
      }
    },
    openPopup () {
      document.getElementsByClassName('content-avatars')[0].style.display = 'block'
    },
    closePopup () {
      document.getElementsByClassName('content-avatars')[0].style.display = 'none'
    },
    changeTheme (theme) {
      this.$store.theme = theme
      console.log(this.$store.theme)
    }
  },
  created () {
    this.$store.$watch('user', (user) => {
      if (user.id) {
        this.$router.push('/')
      }
    })
  }
}
</script>

<style lang="sass">
</style>
