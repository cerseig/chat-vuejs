<template>
  <div>
    <message v-for="message in messages" :data="message"></message>
  </div>
</template>

<script>
import Message from 'components/Message'

export default {
  props: ['messages'],
  components: {
    Message
  }
}

</script>
