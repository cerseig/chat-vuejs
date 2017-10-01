<template>
  <form @submit.prevent="onSubmit" class="form-message">
    <input type="text"  class="textarea" placeholder="Type something..." v-model="message">
    <button class="send-message"><i class="fa fa-paper-plane-o"></i></button>
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
    },
    onTyping (e) {
      this.isTyping(this.$store.user)
    }
  },
  mounted () {
    document.querySelector('textarea').addEventListener('keyup', this.isTyping)
  }
}
</script>
