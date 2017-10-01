import io from 'socket.io-client'
import Vue from 'vue'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'
import image6 from '../assets/6.png'

function randomImage () {
  let images = []
  let random = Math.floor(Math.random() * 6) + 1
  images.push(image1)
  images.push(image2)
  images.push(image3)
  images.push(image4)
  images.push(image5)
  images.push(image6)
  return images[random]
}

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

    socket.on('getUsers', (users) => {
      console.log(users)
      users.forEach(u => { u.avatarUrl = randomImage() })
      console.log(users)
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
    })

    socket.on('typing', (user) => {
      store.isTyping = true
    })

    socket.on('stopTyping', (user) => {
      store.isTyping = false
    })

    Vue.mixin({
      methods: {
        connect (username) {
          socket.emit('user connected', {
            username
          })
        },
        sendMessage (message) {
          socket.emit('new message', message)
        },
        isTyping (user) {
          store.emit('typing', user)
        },
        notTyping (user) {
          store.emit('stopTyping', user)
        }
      }
    })
  },
  methods: {
    changeTheme (theme) {
      store.theme = theme
    }
  }
}
