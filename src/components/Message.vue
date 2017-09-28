<template>
  <div class="message-content">
    <div class="text">
      <h3>
        {{ data.author.username }}
      </h3>
      <p>
        {{ data.body }}
      </p>
      <span class="data">
        {{ data.createdAt | moment }}
      </span>
    </div>
    <img src="../assets/pinguin.png">
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['data'],
  methods: {
    moment: function () {
      return moment()
    }
  },
  filters: {
    moment: function (data) {
      return moment(data.createdAt).calendar()
    }
  }
}

</script>
