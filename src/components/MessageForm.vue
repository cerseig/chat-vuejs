<template>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="message" v-model="message">
    <button>Envoyer</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onSubmit (e) {
      this.sendMessage(this.message)
      this.message = ''
    }
  }
}
</script>
