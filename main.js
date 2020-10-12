const app = new Vue({
  el: '#app',
  data: {
    newTask: null,
    tasks: []
  },
  mounted() {
    const getjson = localStorage.getItem('tasks')

     if (getjson) {
      try {
        this.tasks = JSON.parse(getjson)
      } catch (e) {
        localStorage.removeItem('tasks')
      }
    }
  },
  methods: {
    addTask() {
      if (!this.newTask) {
        return
      }
      this.tasks.push(this.newTask)
      this.newTask = null
      saveTask()
    },
    deleteTask(i) {
      this.tasks.splice(i, 1)
      saveTask()
    },
    saveTask() {
      const setjson = JSON.stringify(this.tasks)
      localStorage.setItem('tasks', setjson)
    }
  }
})
