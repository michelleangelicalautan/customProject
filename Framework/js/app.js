const NameTest = {
  template: `
     <div class="container">
         <div class="text-center mb-4">
            <h1>Name Test</h1>
         </div>
          <div class="form-group">
            <label for="stringTest">Please enter your name:</label>
            <input type="text" id="stringTest" class="form-control" v-model="strName">
          </div>
          <div v-if="strName.toLowerCase() == 'michelle'" class="alert alert-success">
            Awesome name!
          </div>
          <div v-else class="alert alert-info">
            {{ strName }} is not my name!
          </div>
    </div>
  `,
  data() {
    return {
      strName: ''
    };
  }
};

const PostManagement = {
  template: `
   <div class="container">
           <div class="text-center mb-4">
            <h1>Post Management</h1>
           </div>
            <div class="row justify-content-center mb-3">
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
  data() {
   return {
      statPosts: [],
      strStatus: ''
    };

  },
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
};

const StudentMarks = {
  data() {
    return {
      students: [
        { name: 'Amy', mark: 90 },
        { name: 'Bill', mark: 80 },
        { name: 'Casey', mark: 78 },
        { name: 'David', mark: 84 },
        { name: 'Anna', mark: 95 },
        { name: 'Franklin', mark: 88 },
        { name: 'Janice', mark: 92 },
        { name: 'Cassie', mark: 87 },
        { name: 'Luna', mark: 79 },
        { name: 'Adam', mark: 85 },
        { name: 'Kate', mark: 93 },
        { name: 'Leon', mark: 82 },
        { name: 'Mega', mark: 91 },
        { name: 'Nathaniel', mark: 89 },
        { name: 'Oliviar', mark: 83 },
        { name: 'Grace', mark: 77 },
        { name: 'Jefferson', mark: 75 },
        { name: 'Evelyn', mark: 86 },
        { name: 'Sarah', mark: 94 },
        { name: 'Tom', mark: 76 },
        { name: 'Uma', mark: 81 },
        { name: 'Victor', mark: 96 },
        { name: 'Wendy', mark: 97 },
        { name: 'Joshua', mark: 73 },
        { name: 'Gilbert', mark: 74 },
        { name: 'Aurelia', mark: 72 }
      ],
      currentPage: 1,
      itemsPerPage: 3 // Adjust as needed
    };
  },
  computed: {
    paginatedStudents() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.students.slice(startIndex, startIndex + this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.students.length / this.itemsPerPage);
    }
  },
  methods: {
    changePage(pageNum) {
      this.currentPage = Number(pageNum);
    }
  },
  template: `
   <div class="container">
      <div class="text-center mb-4">
      <h1>Student Marks</h1>
      </div>
       <table class="table table-striped">
        <thead>
          <tr>
            <th>Student</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in paginatedStudents" :key="index">
            <td>{{ student.name }}</td>
            <td>{{ student.mark }}</td>
          </tr>
        </tbody>
      </table>

      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Prev Page</button>
          </li>
          <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
            <button class="page-link" @click="changePage(page)">{{ page }}</button>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link" @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next Page</button>
          </li>
        </ul>
      </nav>
    </div>
  `
};


const routes = [
  { path: '/name-test', component: NameTest },
  { path: '/post-management', component: PostManagement },
  { path: '/student-marks', component: StudentMarks }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

const app = Vue.createApp({});
app.use(router);
app.component('app-mypost', {
  template: `
    <div>
          <h1>Student Marks</h1>

          <v-table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Mark</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(student, index) in paginatedUnits" :key="index">
                <td>{{ student.name }}</td>
                <td>{{ student.mark }}</td>
              </tr>
            </tbody>
          </v-table>

          <paginate
            :page-count="totalPages"
            :page-range="5"
            :margin-pages="1"
            :click-handler="clickCallback"
            :prev-text="'Prev Page'"
            :next-text="'Next Page'"
            :container-class="'pagination'"
            :active-class="'currentPage'"
          >
          </paginate>
        </div>


  `
});
app.component('app-studentmark', {
  template: `
    <div>
      <!-- Your Student Marks component content here -->
    </div>
  `
});
app.mount('#app');
