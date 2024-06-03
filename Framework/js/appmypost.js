const app = Vue.createApp({ })

app.component('app-mypost', {
  data() {
    return {
      statPosts: [],
      strStatus: ''
    }
  },
  template: `
      <div>
        <div class="row mb-3">
          <div class="col-6 offset-1">
            <input type="text" v-model="strStatus" placeholder="Enter your status" class="form-control ml-3">
          </div>
          <div class="col-auto">
            <button @click="add" class="btn btn-warning">Post</button>
          </div>
        </div>
        <div v-for="(status, index) in statPosts" :key="index" class="row mb-3">
          <div class="col-9">
            <p>{{ status }}</p>
          </div>
          <div class="col-3">
            <button @click="remove(index)" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
  `,
  methods: {
    add() {
      if (this.strStatus.trim() !== '') {
        this.statPosts.unshift(this.strStatus);
        this.strStatus = '';
      }
    },
    remove(index) {
      this.statPosts.splice(index, 1);
    }
  }
});

app.mount('#app');
