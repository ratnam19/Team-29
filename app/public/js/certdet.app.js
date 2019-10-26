var certifDetailsApp = new Vue({
  el: '#certifDetailsApp',
  data: {
    certifications: [],
    recordCerti: {}
  },
  methods: {
    fetchCertification() {
      fetch('api/certification/fetchCerti.php')
      .then(response => response.json())
      .then(json => { certifDetailsApp.certifications = json })
    },
    handleSubmit(event) {
      fetch('api/certification/post.php', {
        method: 'POST',
        body: JSON.stringify(this.recordCerti),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {certifDetailsApp.certifications.push( json[0] )})
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });
      this.handleReset();
    },
    handleReset() {
      this.recordCerti = {
        certificationName: '',
        certifyingAgency: '',
        expirationDate: ''
      }
    },
    handleRowClick(certification) {
      certificationTriageApp.certification = certification;
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchCertification();
  }
});
