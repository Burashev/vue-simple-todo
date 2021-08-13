<template>
  <div class="task">
    <p class="task-title">{{ task.title }}</p>
    <div class="task-btns">
      <button class="btn green-btn" v-if="!task.isDone" @click="doneTask">Done</button>
      <button class="btn grey-btn" v-else @click="doneTask">Undone</button>
      <button class="btn red-btn" @click="removeTask">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  methods: {
    doneTask() {
      this.$emit('done');
    },
    removeTask() {
      this.$emit('remove');
    }
  },
  props: {
    task: {
      required: true,
      type: Object
    }
  }
};
</script>

<style scoped>
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.task-title {
  font-size: 1.1rem;
}

.task-done .task-title {
  color: #46cc64;
  text-decoration: line-through;
}
</style>
