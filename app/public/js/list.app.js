var personListApp = new Vue({
  el: '#personListApp',
  data: {
    person: [],
    recordPerson: {},
    filter: {
      sab: ''
    }
  },
  methods: {
    fetchPersons() {
      fetch('api/list/fetch.php')
      .then(response => response.json())
      .then(json => { personListApp.person = json })
    },
    handleSubmit(event) {
      fetch('api/list/post.php', {
        method: 'POST',
        body: JSON.stringify(this.recordPerson),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {personListApp.person.push( json[0] )})
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });
      this.handleReset();
    },
    handleReset() {
      this.recordPerson = {
        firstName: '',
        lastName: '',
        dob: '',
        gender: ''
      }
    },
    handleRowClick(person) {
      personTriageApp.person = person;
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchPersons();
  }
});
