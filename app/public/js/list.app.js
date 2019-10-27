var personListApp = new Vue({
  el: '#personListApp',
  data: {
    person: [],
    assignedMember:{},
    selectedPerson: {},
    recordPerson: {}
  },
  methods: {
    fetchPersons() {
      fetch('api/list/index.php')
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
        gender: '',
        mobilePhone: '',
        workPhone: '',
        email: '',
        street: '',
        region: '',
        state: '',
        city: '',
        zip: '',
        stationNumber: '',
        radioNumber: '',
        position: '',
        startDate: '',
        isActive: '',
        isEmployee: ''
      }
    },
    handleRowClick(person) {
      personListApp.selectedPerson = person;
    },
    handleEdit(event) {
      fetch('api/list/edit.php', {
        method: 'POST',
        body: JSON.stringify(this.selectedPerson),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {personListApp.person.push( json[0] )})
      .then(this.fetchPersons())
      .catch( err => {
        console.error('RECORD EDIT ERROR:');
        console.error(err);
      });
      this.handleReset();
      this.fetchPersons();
    },
    handleDelete(event) {
      fetch('api/list/delete.php', {
        method: 'POST',
        body: JSON.stringify(this.selectedPerson),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then(json => { personListApp.person = json })
      .then(this.fetchPersons())
      .catch( err => {
        console.error('RECORD DELETE ERROR:');
        console.error(err);
      });
      this.handleReset();
      this.fetchPersons();
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchPersons();
  }
});
