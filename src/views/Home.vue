<template>
  <div class="home">
    <img src="../assets/logo.png">
    <TableDemo :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TableDemo from '@/components/TableDemo.vue'

export default {
  name: 'home',
  data() {
    return {
      msg: 'CARS TABLE'
    }
  },
  components: {
    TableDemo
  },
  methods: {
  }
}
</script>
