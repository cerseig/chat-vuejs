<template>
  <div>
    <div class="message-content" v-bind:class="{'myMessage':myMessage}">
      <div class="text">
        <h3>
          {{ data.author.username }}
        </h3>
        <p>
          {{ data.body }}
        </p>
        <span class="date">
          {{ data.createdAt | moment }}
        </span>
      </div>
      <!-- <img :src="data.author.avatarUrl" class="avatar-message"> -->
      <img src="../assets/pinguin.png" alt="">
    </div>
    <div style="clear:both"></div>
  </div>

</template>

<script>
import moment from 'moment'

export default {
  props: ['data'],
  computed: {
    myMessage () {
      if (this.data.author.id === this.$store.user.id) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    moment: function () {
      return moment()
    }
  },
  filters: {
    moment: function (data) {
      return moment(data.createdAt).locale('fr').format('LT')
    }
  },
  mounted () {
    this.$nextTick(() => {
      let messageList = document.querySelector('.messages-content')
      messageList.scrollTop = messageList.scrollHeight
    })
  }
}

</script>
