<template>
  <section :style="style">

    <header>
      <div class="content">
        <img src="../../assets/pinguin.png" alt="Votre avatar">
        <h2 v-if="$store.user">{{ $store.user.username }}</h2>
      </div>
    </header>

    <main>
      <div class="users-column">
        <user-list :users="$store.users"></user-list>
      </div>

      <div class="messages-content">
        <message-list :messages="$store.messages">{{ $store.messages }}</message-list>
        <message-form></message-form>
      </div>

      <div class="user-column">
        <h2 v-if="$store.user">{{ $store.user.username }}</h2>
      </div>
    </main>

  </section>
</template>

<script>
import UserList from 'components/UserList'
import MessageList from 'components/MessageList'
import MessageForm from 'components/MessageForm'

export default {
  props: ['store'],
  components: {
    UserList,
    MessageList,
    MessageForm
  }
}

</script>
