<template>
  <div class="power-pill">
    <span class="tag" :class=" {'is-danger' : power > 220, 'is-warning' : power > 100 && power <= 220, 'is-info' : power <= 100}" >{{parsedPower}}</span>
  </div>
</template>

<script>
export default {
  name: 'PowerPill',
  props: {
    power: String
  },
  computed: {
      parsedPower() {
          return this.power.concat('CV');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
