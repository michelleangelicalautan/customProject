var readJsonURL = 'units.json'; //json file location

const { createApp } = Vue;
const { createVuetify } = Vuetify;
const app = createApp();
const vuetify = createVuetify();

// Register the paginate component globally
app.component('paginate', VuejsPaginateNext);

app.component('app-unit', {
  // defining data to be used in the component
  data: function () {
    return {
      currentPage: 1,
      units: [],
    };
  },

  // store data from JSON file to units after the component has been mounted
  mounted() {
    var self = this;
    $.getJSON(readJsonURL, function (data) {
      self.units = data;
    });
  },

  // define the template for the component
  template: `
    <div>
        <v-row>
            <v-col cols="12" md="12 ">
                <v-card class="mx-auto" max-width="90%">
                    <v-card-title>
                        <h1>Unit details</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Description</th>
                                        <th>Credit Points</th>
                                        <th>Type</th>
                                    </tr>
                                </thead>
                                <!-- Using v-for to loop units and list them -->
                                <tbody>
                                    <tr v-for="(unit, index) in getItems" :key="index">
                                        <td>{{unit.code}}</td>
                                        <td>{{unit.desc}}</td>
                                        <td>{{unit.cp}}</td>
                                        <td>{{unit.type}}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4">
                <!-- Vue Paginate template -->
                <paginate
                    :page-count="5"
                    :page-range="3"
                    :margin-pages="1"
                    :click-handler="clickCallback"
                    :prev-text=" 'Prev' "
                    :next-text="'Next'"
                    :container-class="'pagination'"
                    :page-class="'page-item'">
                </paginate>
            </v-col>
        </v-row>
    </div>
    `,

  computed: {
    // returns the data according to the page number
    getItems: function () {
        let curr = this.currentPage * 5;
        let initial = curr - 5;
        return this.units.slice(initial, curr);
    }

  },

  methods: {
    // sets the clicked page
    clickCallback: function (pageNum) {
      this.currentPage = Number(pageNum);
    },
  },
});

app.use(vuetify).mount('#app');
