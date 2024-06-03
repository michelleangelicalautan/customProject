var studentsData = [
  { "name": "Amy", "mark": 90 },
  { "name": "Bill", "mark": 80 },
  { "name": "Casey", "mark": 78 },
  { "name": "David", "mark": 84 },
  { "name": "Anna", "mark": 95 },
  { "name": "Franklin", "mark": 88 },
  { "name": "Janice", "mark": 92 },
  { "name": "Cassie", "mark": 87 },
  { "name": "Luna", "mark": 79 },
  { "name": "Adam", "mark": 85 },
  { "name": "Kate", "mark": 93 },
  { "name": "Leon", "mark": 82 },
  { "name": "Mega", "mark": 91 },
  { "name": "Nathaniel", "mark": 89 },
  { "name": "Oliviar", "mark": 83 },
  { "name": "Grace", "mark": 77 },
  { "name": "Jefferson", "mark": 75 },
  { "name": "Evelyn", "mark": 86 },
  { "name": "Sarah", "mark": 94 },
  { "name": "Tom", "mark": 76 },
  { "name": "Uma", "mark": 81 },
  { "name": "Victor", "mark": 96 },
  { "name": "Wendy", "mark": 97 },
  { "name": "Joshua", "mark": 73 },
  { "name": "Gilbert", "mark": 74 },
  { "name": "Aurelia", "mark": 72 }
];

const { createApp } = Vue;
const { createVuetify } = Vuetify;
const app = createApp();
const vuetify = createVuetify();

app.component('app-studentmark', {
  components: {
    paginate: VuejsPaginateNext,
  },
  data() {
    return {
      currentPage: 1,
      units: studentsData
    };
  },
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
  `,
  computed: {
    paginatedUnits() {
      const startIndex = (this.currentPage - 1) * 3;
      return this.units.slice(startIndex, startIndex + 3);
    },
    totalPages() {
      return Math.ceil(this.units.length / 3);
    }
  },
  methods: {
    clickCallback(pageNum) {
      this.currentPage = Number(pageNum);
    }
  }
});

app.use(vuetify).mount('#app');
