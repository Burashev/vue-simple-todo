<template>
  <the-card>
    <template v-slot:title>
      Todo list
    </template>
    <template v-slot:header>
      <form @submit.prevent="addTask">
        <input type="text" placeholder="Title" class="form-input" v-model.trim="formTitle">
        <button class="blue-btn btn">Add</button>
      </form>
    </template>
    <template v-slot:body>
      <filters-list
        @changeFilter="changeFilter"
        :active-filter="activeFilter"
        :filters="filters"
      ></filters-list>
      <tasks-list :tasks="filteredTasks" @remove="removeTask" @done="doneTask">
      </tasks-list>
    </template>
  </the-card>
</template>

<script>
import TasksList from '@/components/TasksList';
import taskLocal from '@/services/task-local';
import TheCard from '@/components/TheCard';
import FiltersList from '@/components/FiltersList';

export default {
  name: 'Main',
  components: {
    FiltersList,
    TheCard,
    TasksList
  },
  data() {
    return {
      tasks: [],
      formTitle: '',
      filters: [
        {
          name: 'All',
          parameter: 'id',
          status: true
        },
        {
          name: 'Active',
          parameter: 'isDone',
          status: false
        },
        {
          name: 'Completed',
          parameter: 'isDone',
          status: true
        }
      ],
      activeFilter: 0
    };
  },
  methods: {
    doneTask(task) {
      task.isDone = !task.isDone;
    },
    removeTask(task) {
      this.tasks = this.tasks.filter(fTask => fTask !== task);
    },
    addTask() {
      if (!this.formTitle) return null;
      this.tasks.push({
        id: Date.now(),
        title: this.formTitle,
        isDone: false
      });
      this.formTitle = '';
    },
    changeFilter(id) {
      this.activeFilter = id;
    }
  },
  computed: {
    filteredTasks() {
      const filter = this.filters[this.activeFilter];
      return this.tasks.filter((task) => {
        return filter.status ? task[filter.parameter] : !task[filter.parameter]
      });
    }
  },
  watch: {
    tasks: {
      handler() {
        taskLocal.setTasks(this.tasks);
      },
      deep: true
    },
  },
  mounted() {
    this.tasks = taskLocal.getTasks();
  }
};
</script>

<style>
.btn {
  border: 2px solid;
  background-color: transparent;
  padding: 10px 15px;
  margin-left: 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color ease .4s,
  color ease .4s;
}

.blue-btn {
  border-color: cornflowerblue !important;
  color: cornflowerblue;
}

.blue-btn:hover {
  background-color: cornflowerblue;
  color: white;
}

.red-btn {
  border-color: crimson !important;
  color: crimson;
}

.red-btn:hover {
  background-color: crimson;
  color: white;
}

.green-btn {
  border-color: #46cc64 !important;
  color: #46cc64;
}

.green-btn:hover {
  background-color: #46cc64;
  color: white;
}

.grey-btn {
  border-color: #e3e5ec !important;
  color: #e3e5ec;
}

.grey-btn:hover {
  background-color: #e3e5ec;
  color: white;
}
</style>

<style scoped>
form {
  display: flex;
  justify-content: space-between;
}

.form-input {
  padding: 10px 15px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #e3e5ec;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
}
</style>
