<template>
  <section class="filters-section">
    <p
      class="filter-btn"
      v-for="(filter, index) in filters"
      :key="filter.name"
      :class="{'active': activeFilter === index}"
      @click="changeFilter(index)"
    >
      {{ filter.name }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'FiltersList',
  props: {
    filters: {
      required: true,
      type: Object
    },
    activeFilter: {
      required: true,
      type: Number
    }
  },
  methods: {
    changeFilter(index) {
      this.$emit('changeFilter', index);
    }
  }
};
</script>

<style scoped>
.filters-section {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}

.filter-btn {
  color: rgba(117, 117, 117, .7);
  cursor: pointer;
}

.filter-btn.active {
  color: rgba(117, 117, 117, 1);
  text-decoration: underline;
}

.filter-btn:hover {
  color: rgba(117, 117, 117, 1);
}
</style>
