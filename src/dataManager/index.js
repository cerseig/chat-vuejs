import io from 'socket.io-client'
import Vue from 'vue'

export const store = new Vue({
  data: {
    user: {}, // User information
    users: [], // User list,
    messages: [] // Message list
  }
})

export default {
  install (Vue, options) {
    // Connect socket io
    const socket = io(options.api)

    Vue.prototype.$store = store // toutes les nouvelles instances de vue vont avoir ce prototype et on va pouvoir utiliser store partout dans l'appli

    // socket.on('connect', () => {
    //   console.log('connect')
    // })

    socket.on('getUsers', (users) => {
      for (var i = 0; i < users.length; i++) { // ajouter et push un user au fur et à mesure et l'afficher
        store.users.push(users[i])
      }
    })

    socket.on('user connected', (user) => { // voir les gens qui sont connectés
      store.user = user
    })

    socket.on('user left', (userId) => { // voir les users qui se déconnectent du serveur sans refresh
      store.users = store.users.filter(user => user.id !== userId)
    })

    socket.on('user joined', (user) => { // voir les users qui se connectent au serveur sans rerfresh
      store.users = user.clients
    })

    socket.on('new message', (message) => {
      store.messages.push(message)
      // store.messages.push({username:data.author.username,text:data.body})
      // data = {
      //   author: {
      //     username: '',
      //     avatarURL:
      //   }
      // }
    })

    // socket.on('wizz', (user) => {
    //
    // })

    Vue.mixin({
      methods: {
        connect (username) {
          socket.emit('user connected', {
            username
          })
        },
        sendMessage (message) {
          socket.emit('new message', message)
        }
      }
    })
  }
}
