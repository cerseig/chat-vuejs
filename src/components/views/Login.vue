<template>
  <main class="login">
      <div class="content-login">
          <h1>Bonbec'</h1>
          <form @submit.prevent="onSubmit">
              <p class="error" v-if="error">The username is invalid</p>
              <input type="text" placeholder="Username" v-model="username">
              <br><div class="avatar-choice" v-on:click="openPopup">Choose an avatar</div>
              <br><button class="log">></button>
          </form>
    </div>
    <div class="content-avatars">
      <div v-on:click="closePopup" class="closePopup">close</div>
        <h2>Choose your avatar</h2>
        <div class="avatars">
          <div class="avatars-list">
          <div class="row">
            <label>
              <input type="radio" name="avatars" value="poulpe" />
              <img src="../../assets/poulpe.png">
            </label>
            <label>
              <input type="radio" name="avatars" value="toucan" />
              <img src="../../assets/toucan.png">
            </label>
            <label>
              <input type="radio" name="avatars" value="pinguin" />
              <img src="../../assets/pinguin.png">
            </label>
          </div>
            <div class="row">
              <label>
                <input type="radio" name="avatars" value="renard" />
                <img src="../../assets/renard.png">
              </label>
              <label>
                <input type="radio" name="avatars" value="chameau" />
                <img src="../../assets/chameau.png">
              </label>
              <label>
                <input type="radio" name="avatars" value="crocodile" />
                <img src="../../assets/crocodile.png">
              </label>
            </div>
          </div>
        </div>
    </div>
  </main>
</template>

<script>
// Import avatar from '../../assets/avatar.png'

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

<style lang="scss">
</style>
