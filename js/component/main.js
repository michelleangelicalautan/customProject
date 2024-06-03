//Sign Up Section
const SignUp = {
  name: 'SignUp',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      firstNameError: '',
      lastNameError: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
      submitted: false
    };
  },
  methods: {
    validateForm() {
      this.submitted = true;
      this.validateFirstName();
      this.validateLastName();
      this.validateUsername();
      this.validateEmail();
      this.validatePassword();

      if (!this.firstNameError && !this.lastNameError && !this.usernameError && !this.emailError && !this.passwordError) {
        alert('Form submitted successfully!');
      }
    },
    validateFirstName() {
      const re = /^[a-zA-Z]+$/;
      if (!this.firstName) {
        this.firstNameError = 'First name is required.';
      } else if (!re.test(this.firstName)) {
        this.firstNameError = 'First name must contain only characters.';
      } else {
        this.firstNameError = '';
      }
    },
    validateLastName() {
      const re = /^[a-zA-Z]+$/;
      if (!this.lastName) {
        this.lastNameError = 'Last name is required.';
      } else if (!re.test(this.lastName)) {
        this.lastNameError = 'Last name must contain only characters.';
      } else {
        this.lastNameError = '';
      }
    },
    validateUsername() {
      if (!this.username) {
        this.usernameError = 'Username is required.';
      } else if (this.username.length <= 3) {
        this.usernameError = 'Username must be more than 3 characters.';
      } else {
        this.usernameError = '';
      }
    },
    validateEmail() {
      const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!this.email) {
        this.emailError = 'Email is required.';
      } else if (!re.test(this.email)) {
        this.emailError = 'Please enter a valid email address in the form of ...@....com.';
      } else {
        this.emailError = '';
      }
    },
    validatePassword() {
      if (!this.password) {
        this.passwordError = 'Password is required.';
      } else if (this.password.length <= 4) {
        this.passwordError = 'Password must be more than 4 characters.';
      } else {
        this.passwordError = '';
      }
    }
  },
  template: `
    <div class="signup-page">
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card shadow-lg">
              <div class="card-header text-center bg-transparent">
                <h1 class="h4 mt-3">Sign Up</h1>
              </div>
              <div class="card-body">
                <form @submit.prevent="validateForm">
                  <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="firstName" 
                      v-model="firstName" 
                      @input="validateFirstName" 
                      :class="{'is-invalid': firstNameError}">
                    <div class="invalid-feedback">
                      {{ firstNameError }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="lastName" 
                      v-model="lastName" 
                      @input="validateLastName" 
                      :class="{'is-invalid': lastNameError}">
                    <div class="invalid-feedback">
                      {{ lastNameError }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="username" 
                      v-model="username" 
                      @input="validateUsername" 
                      :class="{'is-invalid': usernameError}">
                    <div class="invalid-feedback">
                      {{ usernameError }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email">Email Address</label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="email" 
                      v-model="email" 
                      @input="validateEmail" 
                      :class="{'is-invalid': emailError}">
                    <div class="invalid-feedback">
                      {{ emailError }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input 
                      type="password" 
                      class="form-control" 
                      id="password" 
                      v-model="password" 
                      @input="validatePassword" 
                      :class="{'is-invalid': passwordError}">
                    <div class="invalid-feedback">
                      {{ passwordError }}
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
                  </div>

                  <!-- Show the login link if the user already has an account -->
                  <p class="mt-3" v-if="userHasAccount">Already have an account? <router-link to="/login-page">Login here</router-link>.</p>
                </form>
              </div>
            </div>
          </div>
        </div> 
        `
  };    


//Login Page Section
const LoginPage = {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
      submitted: false
    };
  },
  methods: {
    validateForm() {
      this.submitted = true;
      this.validateUsername();
      this.validatePassword();

      if (!this.usernameError && !this.passwordError) {
        this.$router.push('/event-page'); 
      }
    },
    validateUsername() {
      if (!this.username) {
        this.usernameError = 'Username is required.';
      } else {
        this.usernameError = '';
      }
    },
    validatePassword() {
      if (!this.password) {
        this.passwordError = 'Password is required.';
      } else {
        this.passwordError = '';
      }
    }
  },
  template: `
    <div class="login-page">
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card shadow-lg">
              <div class="card-header text-center bg-transparent">
                <h1 class="h4 mt-3">Login</h1>
              </div>
              <div class="card-body">
                <form @submit.prevent="validateForm">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="username" 
                      v-model="username" 
                      @input="validateUsername" 
                      :class="{'is-invalid': usernameError}">
                    <div class="invalid-feedback">
                      {{ usernameError }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input 
                      type="password" 
                      class="form-control" 
                      id="password" 
                      v-model="password" 
                      @input="validatePassword" 
                      :class="{'is-invalid': passwordError}">
                    <div class="invalid-feedback">
                      {{ passwordError }}
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Login</button>
                  <p class="mt-3">Don't have an account? <router-link to="/sign-up">Sign up here</router-link>.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};



//Home Page Section
const HomePage = {
    template: `
      <div class="home-page">
        <!-- Hero Section -->
        <div class="hero-section text-center">
          <h1>A Smart Way to Create Events with Ethereal Events</h1>
          <router-link to="/event-page" class="btn btn-primary mt-3">Search for Event</router-link>
        </div>
    
        <!-- Upcoming Events Section -->
        <div class="container mt-5">
          <h2 class="text-center">Upcoming Online Events</h2>
          <div class="row mt-4">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Career Conference & Development</h5>
                  <router-link to="#" class="btn btn-outline-primary">More Detail</router-link>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Real Estate Career Gathering</h5>
                  <router-link to="#" class="btn btn-outline-primary">More Detail</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Features Section -->
        <div class="container mt-5">
          <h2 class="text-center">Features of Ethereal</h2>
          <div class="row mt-4 text-center">
            <div class="col-md-4">
              <div class="feature-card">
                <h5>Book Event</h5>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-card">
                <h5>Explore Events</h5>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-card">
                <h5>Create Event</h5>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Footer -->
        <footer class="footer mt-5 py-3 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h5>Logo</h5>
                <p>Our Contact</p>
                <div class="social-links">
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                  <a href="#"><i class="fas fa-envelope"></i></a>
                </div>
              </div>
              <div class="col-md-4">
                <h5>Your Account</h5>
                <ul class="list-unstyled">
                  <li><router-link to="/sign-up">Sign Up</router-link></li>
                  <li><router-link to="/login-page">Login</router-link></li>
                </ul>
              </div>
              <div class="col-md-4">
                <h5>Discover</h5>
                <ul class="list-unstyled">
                  <li><router-link to="#">Event</router-link></li>
                  <li><router-link to="#">Career</router-link></li>
                  <li><router-link to="#">Topics</router-link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    `,
  };
//Event Page Section
  const EventPage = {
    data() {
      return {
        events: [],
        wishlist:[],
        currentPage: 1,
        itemsPerPage: 5, // Adjust as needed
        searchQuery: '',
        selectedCategory: '',
        selectedLocation: '',
        selectedDate: '',
        errorMessage: '',
      };
    },
    components: {
      paginate: VuejsPaginateNext,
    },
    computed: {
      filteredEvents() {
        let filtered = this.events;
  
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          filtered = filtered.filter(event => event.event_name.toLowerCase().includes(query));
        }
  
        if (this.selectedCategory) {
          filtered = filtered.filter(event => event.category === this.selectedCategory);
        }
  
        if (this.selectedLocation) {
          const location = this.selectedLocation.toLowerCase();
          filtered = filtered.filter(event => event.location.toLowerCase().includes(location));
        }
  
        if (this.selectedDate) {
          filtered = filtered.filter(event => event.date === this.selectedDate);
        }
  
        return filtered;
      },
      paginatedEvents() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.filteredEvents.slice(startIndex, endIndex);
      },
      totalPages() {
        return Math.ceil(this.filteredEvents.length / this.itemsPerPage);
      },
      categories() {
        return [...new Set(this.events.map(event => event.category))];
      }
    },
    methods: {
      changePage(pageNum) {
        this.currentPage = pageNum;
      },
      addToWishlist(event) {
        this.$emit('add-to-wishlist', event);
      }
    },
    created() {
      var self = this;
      var readSQLApiURL = "./resources/apis.php";
  
      fetch(readSQLApiURL)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          self.events = data;
        })
        .catch((error) => {
          self.errorMessage = error;
        });
    },
    template: `
      <div class="container">
        <!-- Add space below navbar -->
        <div class="my-4"></div>
  
        <div class="row">
          <div class="col-md-6">
            <input type="text" id="searchEvent" class="form-control mb-3" v-model="searchQuery" placeholder="Search events">
          </div>
          <div class="col-md-2">
            <select class="form-select mb-3" id="selectCategory" v-model="selectedCategory">
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category">{{ category }}</option>
            </select>
          </div>
          <div class="col-md-2">
            <input type="text" id="location" class="form-control mb-3" v-model="selectedLocation" placeholder="Location">
          </div>
          <div class="col-md-2">
            <input type="date" id="date" class="form-control mb-3" v-model="selectedDate" placeholder="Date">
          </div>
        </div>
        
        <div class="text-center mb-4">
          <h1>Events</h1>
        </div>
        
        <div class="text-center mb-3">
          <!-- Link to create event page -->
          <router-link to="/create-event" class="btn btn-primary">Create Event</router-link>
        </div>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col" id="eventHead">Event Name</th>
                <th scope="col" id="categoryHead">Category</th>
                <th scope="col" id="locHead">Location</th>
                <th scope="col" id="dateHead">Date</th>
                <th scope="col" id="actionHead">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="event in paginatedEvents" :key="event.id">
                <td scope="col" id="eventHead">{{ event.event_name }}</td>
                <td scope="col" id="categoryHead">{{ event.category }}</td>
                <td scope="col" id="locHead">{{ event.location }}</td>
                <td scope="col" id="dateHead">{{ event.event_date }}</td>
                <td>
                  <button class="btn btn-success" @click="addToWishlist(event)">Add to Wishlist</button>
                  <router-link to="/edit-event" class="btn btn-primary">Edit Event</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      
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
  
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
      </div>
    `
  };
  
  //WishList Page Section
  const WishlistPage = {
    data() {
      return {
        wishlist: [] 
      };
    },
    methods: {
      addToWishlist(event) {
        // Add the event to the wishlist array
        this.wishlist.push(event);
        alert(`Added "${event.name}" to wishlist`);
      }
    },
    template: `
      <div class="container mt-5">
        <h1 class="text-center mb-4">Wishlist</h1>
        <!-- Display wishlist -->
        <div class="table-responsive">
          <table class="table table-striped table-bordered">
            <thead class="table-dark">
              <tr>
                <th scope="col" id="eventHead>Event Name</th>
                <th scope="col" id="categoryHead>Category</th>
                <th scope="col" id="locHead>Location</th>
                <th scope="col" id="dateHead">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(event, index) in wishlist" :key="index">
                <td scope="col" id="eventHead">{{ event.name }}</td>
                <td scope="col" id="categoryHead">{{ event.category }}</td>
                <td scope="col" id="locHead">{{ event.location }}</td>
                <td scope="col" id="dateHead">{{ event.date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Include EventPage component and pass addToWishlist method as prop -->
        <event-page @add-to-wishlist="addToWishlist($event)"></event-page>
      </div>
    `
  };
  
  //Career Page Section
  const CareerPage = {
    template: `
      <div class="career-page">
        <div class="container mt-5">
          <h1 class="text-center mb-4">Careers at Ethereal Events</h1>
          <p class="lead">Join us in creating unforgettable experiences! At Ethereal Events, we believe in the power of events to bring people together, inspire, and create lasting memories. As part of our team, you'll have the opportunity to work in a dynamic environment where creativity, innovation, and teamwork are valued.</p>
          <div class="job-openings mt-5">
            <h2>Current Openings</h2>
            <ul class="list-group">
              <li class="list-group-item">Event Coordinator</li>
              <li class="list-group-item">Marketing Manager</li>
              <li class="list-group-item">Event Operations Assistant</li>
              <li class="list-group-item">Graphic Designer</li>
              <!-- Add more job openings as needed -->
            </ul>
          </div>
          <div class="how-to-apply mt-5">
            <h2>How to Apply</h2>
            <p>If you're passionate about events and want to be part of a company that is dedicated to delivering exceptional experiences, we'd love to hear from you! Send your resume and cover letter to <a href="mailto:careers@etherealevents.com">careers@etherealevents.com</a>.</p>
          </div>
        </div>
      </div>
    `
  };
  
  //Create Event Page
  const CreateEventPage = {
    template: `
      <div class="row">
        <div class="col-12 col-md-6 mx-auto">
          <div class="card mx-auto" style="max-width: 90%;">
            <div class="card-body">
              <form @submit.prevent="validateForm">
                <div class="form-group">
                  <label for="eventName">Event Name</label>
                  <input type="text" class="form-control" id="eventName" v-model="eventName" :class="{ 'is-invalid': eventNameError }">
                  <div class="invalid-feedback">{{ eventNameError }}</div>
                </div>
                <div class="form-group">
                  <label for="category">Category</label>
                  <input type="text" class="form-control" id="category" v-model="category" :class="{ 'is-invalid': categoryError }">
                  <div class="invalid-feedback">{{ categoryError }}</div>
                </div>
                <div class="form-group">
                  <label for="location">Location</label>
                  <input type="text" class="form-control" id="location" v-model="location" :class="{ 'is-invalid': locationError }">
                  <div class="invalid-feedback">{{ locationError }}</div>
                </div>
                <div class="form-group">
                  <label for="date">Date</label>
                  <input type="date" class="form-control" id="date" v-model="eventDate" :class="{ 'is-invalid': eventDateError }">
                  <div class="invalid-feedback">{{ eventDateError }}</div>
                </div>
                <button 
                type="submit" 
                class="btn btn-primary btn-block"
                @click="postData(eventName, category, location, eventDate)"
>
  Create Event
</button>

              </form>
            </div>
          </div>
        </div>
  
        <div class="col-12 col-md-6 mx-auto">
          <div class="card mx-auto" style="max-width: 90%;">
            <div class="card-body">
              <p>Output Message : {{ message }}</p>
              <p>Status Code: {{ statusValue }}</p>
              <p>Status: {{ statusMessage }}</p>
              <p>Response Headers: {{ headers }}</p>
            </div>
          </div>
        </div>
      </div>
    `,
    data: function () {
      return {
        eventName: "",
        category: "",
        location: "",
        eventDate: "",
        eventNameError: "",
        categoryError: "",
        locationError: "",
        eventDateError: "",
        message: "",
        statusValue: "",
        statusMessage: "",
        headers: "",
        savingSuccessful: false,
      };
    },
    methods: {
      validateForm() {
        let valid = true;
  
        if (!this.eventName) {
          this.eventNameError = "Event Name is required.";
          valid = false;
        } else {
          this.eventNameError = "";
        }
  
        if (!this.category) {
          this.categoryError = "Category is required.";
          valid = false;
        } else {
          this.categoryError = "";
        }
  
        if (!this.location) {
          this.locationError = "Location is required.";
          valid = false;
        } else {
          this.locationError = "";
        }
  
        if (!this.eventDate) {
          this.eventDateError = "Date is required.";
          valid = false;
        } else {
          this.eventDateError = "";
        }
  
        if (valid) {
          this.postData(this.eventName, this.category, this.location, this.eventDate);
        }
      },
      postData(eventName, category, location, eventDate) {
        var postSQLApiURL = "./resources/apis.php/";
  
        var self = this;
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event_name: eventName,
            category: category,
            location: location,
            event_date: eventDate,
          }),
        };
  
        fetch(postSQLApiURL, requestOptions)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            self.message = "The data filled has been inserted successfully!";
          })
          .catch((error) => {
            self.message = "There was an error: " + error;
          });
      },
    },
  };
  
  //Insert Data Page
  const InsertData = {
    template: `
            <div class="container mt-4">
            <div class="row">
              <div class="col-md-6">
                <div class="card mx-auto" style="max-width: 90%;">
                  <div class="card-body">
                    <!-- Input -->
                    <form name="updateForm" class="form-horizontal">
                      <div class="form-group">
                        <label for="eventName">Event Name</label>
                        <input type="text" class="form-control" id="eventName" v-model="secondName">
                      </div>
                      <div class="form-group">
                        <label for="eventCategory">Event Category</label>
                        <input type="text" class="form-control" id="eventCategory" v-model="secondCategory">
                      </div>
                      <div class="form-group">
                        <label for="eventLocation">Location</label>
                        <input type="text" class="form-control" id="eventLocation" v-model="secondLocation">
                      </div>
                      <div class="form-group">
                        <label for="eventDate">Event Date</label>
                        <input type="date" class="form-control" id="eventDate" v-model="secondDate">
                      </div>
                      <button type="button" class="btn btn-primary" @click="putData(secondName, secondCategory, secondLocation, secondDate)">Update Event Information</button>
                    </form>
                  </div>
                </div>
              </div>
              <!-- Output -->
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body">
                    <p>Output Message: {{ message }}</p>
                    <p>Status Code: {{ statusValue }}</p>
                    <p>Status: {{ statusMessage }}</p>
                    <p>Response Headers: {{ headers }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
       `,
       //variable initialization
      data: function() {
        return {
          secondName: '',
          secondCategory: '',
          secondLocation: '',
          secondDate:'',
          message: '',
          statusValue: '',
          statusMessage: '',
          headers: '',
        }
      },
      methods: {
  
      putData: function(secondName, secondCategory, secondLocation, secondDate) {
  
        var putSQLApiURL = './resources/apis.php/event_name/' + secondName;
  
  
        var self = this;
        const requestOptions = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            event_name: secondName,
            category: secondCategory,
            location: secondLocation,
            event_date: secondDate
          })
        };
  
          fetch(putSQLApiURL, requestOptions)
          .then( response =>{
            //turning the response into the usable data
            return response.json( );
          })
          .then( data =>{
            //This is the data you wanted to get from url
            self.message="The data has been successfully updated !";
          })
          .catch(error => {
            self.err=error
          });
  
      }
  
      }
    }
  
  
  //Navigation to Router
  const routes = [
    { path: '/home-page', component: HomePage },
    { path: '/event-page', component: EventPage },
    { path: '/wish-list', component: WishlistPage },
    { path: '/login-page', component: LoginPage },
    { path: '/sign-up', component: SignUp },
    { path: '/create-event', component: CreateEventPage },
    { path: '/career-page', component: CareerPage },
    { path: '/edit-event', component: InsertData },
  ];
  
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
  });
  
  const app = Vue.createApp({});
  app.use(router);
  app.mount('#app');
  
  
  