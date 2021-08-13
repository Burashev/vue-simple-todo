<template>
  <div class="card">
    <h1 class="card-title">
      <slot name="title"></slot>
    </h1>
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
</template>

<script>
export default {
  name: 'TheCard'
};
</script>

<style scoped>
.card {
  border-radius: 6px;
  background-color: #fff;
  max-width: 700px;
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .15);
}

.card-title {
  margin-bottom: 20px;
}
</style>
