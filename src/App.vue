<template>
  <div class="container">
    <div class="view-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}

input,
select,
button {
  font-size: 1rem;
}

body {
  background-color: #c9efff;
  min-height: 100vh;
}

.container {
  max-width: 1170px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
</style>

<style scoped>
.view-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
