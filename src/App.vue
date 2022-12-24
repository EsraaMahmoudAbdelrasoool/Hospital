<template>
<div class="container">
  <nav>
        <router-link to="/ArrivingList">Arriving Data</router-link> |

    <router-link to="/AddNewArrivingMethod">Add New Arriving</router-link> |
  </nav>
  <router-view/>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
