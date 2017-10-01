<template>
  <section :style="style">

    <header>
      <div class="content">
        <img src="" alt="Votre avatar" id="avatar-header">
        <h2 v-if="$store.user">{{ $store.user.username }}</h2>
      </div>
    </header>

    <main>
      <div class="users-column">
        <!-- <h2>{{$store.users.length}} Gobelinois <br>connectés</h2> -->
        <user-list :users="$store.users"></user-list>
      </div>

      <div class="messages-column">
        <div class="messages-content">
          <message-list :messages="$store.messages">{{ $store.messages }}</message-list>
        </div>

        <div class="form-content">
          <message-form></message-form>
        </div>
      </div>


      <div class="user-column">
        <div class="team">
          <img src="" alt="Avatar du groupe Bonbec'" id="avatar-team">
          <h3>Gobelins BDDI 2017</h3>
        </div>
        <div class="options">
          <h4>Options</h4>
          <ul>
            <li>Modifier les surnoms</li>
            <li>Changer le thème</li>
            <li>Changer l'avatar</li>
          </ul>
        </div>
      </div>
    </main>

  </section>
</template>

<script>
import UserList from 'components/UserList'
import MessageList from 'components/MessageList'
import MessageForm from 'components/MessageForm'
import poulpe from '../../assets/poulpe.png'
import chameau from '../../assets/chameau.png'
import crocodile from '../../assets/crocodile.png'
import pinguin from '../../assets/pinguin.png'
import toucan from '../../assets/toucan.png'
import renard from '../../assets/renard.png'

export default {
  props: ['store'],
  components: {
    UserList,
    MessageList,
    MessageForm
  },
  mounted: function () {
    if (this.$store.theme === 'ocean') {
      console.log('Il faut un BG ocean')
      document.getElementById('app').setAttribute('class', '')
      document.getElementById('app').classList.add('theme-ocean')
      document.getElementById('avatar-header').setAttribute('src', poulpe)
      document.getElementById('avatar-team').setAttribute('src', poulpe)
    }
    if (this.$store.theme === 'jungle') {
      console.log('Il faut un BG jungle')
      console.log(document.getElementById('app'))
      document.getElementById('app').setAttribute('class', '')
      document.getElementById('app').classList.add('theme-jungle')
      document.getElementById('avatar-header').setAttribute('src', toucan)
      document.getElementById('avatar-team').setAttribute('src', toucan)
    }
    if (this.$store.theme === 'marecage') {
      console.log('Il faut un BG marecage')
      console.log(document.getElementById('app'))
      document.getElementById('app').setAttribute('class', '')
      document.getElementById('app').classList.add('theme-marecage')
      document.getElementById('avatar-header').setAttribute('src', crocodile)
      document.getElementById('avatar-team').setAttribute('src', crocodile)
    }
    if (this.$store.theme === 'banquise') {
      console.log('Il faut un BG banquise')
      console.log(document.getElementById('app'))
      document.getElementById('app').setAttribute('class', '')
      document.getElementById('app').classList.add('theme-banquise')
      document.getElementById('avatar-header').setAttribute('src', pinguin)
      document.getElementById('avatar-team').setAttribute('src', pinguin)
    }
    if (this.$store.theme === 'desert') {
      console.log('Il faut un BG desert')
      console.log(document.getElementById('app'))
      document.getElementById('app').setAttribute('class', '')
      document.getElementById('app').classList.add('theme-desert')
      document.getElementById('avatar-header').setAttribute('src', chameau)
      document.getElementById('avatar-team').setAttribute('src', chameau)
    }
    if (this.$store.theme === 'foret') {
      console.log('Il faut un BG foret')
      console.log(document.getElementById('app'))
      document.getElementById('app').setAttribute('class', '')
      document.getElementById('app').classList.add('theme-foret')
      document.getElementById('avatar-header').setAttribute('src', renard)
      document.getElementById('avatar-team').setAttribute('src', renard)
    }
  }
}

</script>
