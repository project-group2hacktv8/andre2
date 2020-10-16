<template>
  <div class="home">
    <h1>Wassap</h1>
      <label for="username">Your Name</label>
    <input type="text" id="username" v-model="username" placeholder="Enter Your name" autocomplete="off">
    <form @submit.prevent="sendMessage">
      <input type="text" id="message" v-model="message" placeholder="Enter Your message..">
      <input type="submit" value="send">
    </form>
    <p v-for="(msg, i) in messages" :key="i"> {{msg.name}} : {{msg.message}} </p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      message: ''
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages
    }
  },
  name: 'Home',
  sockets: {
    serverMessage (payload) {
      this.messages.push(payload)
    }
  },
  methods: {
    sendMessage () {
      this.$socket.emit('newMessage', { message: this.message, name: this.username })
      this.messages.push({ message: this.message, name: this.username })
      this.message = ''
    }
  }
}
</script>
