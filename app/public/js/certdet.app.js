var certifDetailsApp = new Vue({
  el: '#certifDetailsApp',
  data: {
    certifications: [],
    recordCerti: {},
    selectedCerti: {}
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
      .then(this.fetchCertification())
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });
      this.handleReset();
      this.fetchCertification();
    },
    handleReset() {
      this.recordCerti = {
        certificationId: '',
        certificationName: '',
        certifyingAgency: '',
        expiryPeriod: ''
      }
    },
    handleRowClick(certification) {
      certifDetailsApp.recordCerti = certification;
    },
    handleEdit(event) {
      fetch('api/certification/edit.php', {
        method: 'POST',
        body: JSON.stringify(this.recordCerti),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {certifDetailsApp.certifications.push( json[0] )})
      .then(this.fetchCertification())
      .catch( err => {
        console.error('RECORD EDIT ERROR:');
        console.error(err);
      });
      this.handleReset();
      this.fetchCertification();
    },
    handleDelete(event) {
      fetch('api/certification/delete.php', {
        method: 'POST',
        body: JSON.stringify(this.recordCerti),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then(json => { certifDetailsApp.certifications = json })
      .then(this.fetchCertification())
      .catch( err => {
        console.error('RECORD DELETE ERROR:');
        console.error(err);
      });
      this.handleReset();
      this.fetchCertification();
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchCertification();
  }
});
