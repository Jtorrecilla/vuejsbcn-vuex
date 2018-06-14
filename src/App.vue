<template>
  <div id="app">
    <notifications group="alerts" />
    <div id="nav">
      <router-link to="/">Table</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div id="appWrapper" class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#appWrapper {
  text-align: center;
}
</style>
