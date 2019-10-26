var personTriageApp = new Vue({
  el: '#personTriageApp',
  data: {
    person: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/waiting/post.php', {
        method: 'POST',
        body: JSON.strignify.(this.person),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then(json => { })
      .catch( err => {
        console.error('TRIAGE POST ERROR:') ;
        console.error(err);
      })
      // TODO: Add the correct date via Javascript before posting

       // TODO:
       // fetch(url, {
       //   method:'post',
       //   data: this.patient
       // })
       // .then( ... )
       //waitingApp.patients.push(this.patient);
       this.handleReset();
    },
    handleReset() {
      this.person = {
        personId: '',
        firstName: '',
        lastName: '',
        dob: '',
        gender: ''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
