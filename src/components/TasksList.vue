<template>
  <div class="tasks-list">
    <task-item
      v-for="task in tasks"
      :key="task.id"
      :class="{ 'task-done': task.isDone }"
      :task="task"
      @done="doneTask(task)"
      @remove="removeTask(task)"
    >
    </task-item>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem';

export default {
  name: 'TasksList',
  components: { TaskItem },
  props: {
    tasks: {
      required: true,
      type: Array
    }
  },
  methods: {
    doneTask(task) {
      this.$emit('done', task);
    },
    removeTask(task) {
      this.$emit('remove', task);
    },
  }
};
</script>

<style scoped>
.tasks-list {
  margin-top: 30px;
}
</style>
