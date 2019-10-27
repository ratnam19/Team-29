var memberCertificationsApp = new Vue({
  el: '#memberCertificationsApp',
  data: {
    membercertifications: [],
    assignedCerti: {}
  },
  methods: {
    fetchmemberCertification() {
      fetch('api/memberCertis/index.php')
      .then(response => response.json())
      .then(json => { memberCertificationsApp.membercertifications = json })
    },
    handleSubmit(event) {
      this.assignedCerti.certificationId = certifDetailsApp.selectedCerti.certificationId;
      this.assignedCerti.personId = personListApp.assignedMember.personId;
      fetch('api/memberCertis/post.php', {
        method: 'POST',
        body: JSON.stringify(this.assignedCerti),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {memberCertificationsApp.membercertifications.push( json[0] )})
      .then(this.fetchmemberCertification())
      .then(console.log('Fetch'))
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });
      this.handleReset();
      this.fetchmemberCertification();
    },
    handleReset() {
      this.assignedCerti = {
        personId: '',
        certificationId: '',
        startDate: '',
        expirationDate: ''
      }
    },
    handleRowClick(certification) {
      memberCertificationsApp.assignedCerti = certification;
    },
    handleEdit(event) {
      fetch('api/memberCertis/edit.php', {
        method: 'POST',
        body: JSON.stringify(this.assignedCerti),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {memberCertificationsApp.membercertifications.push( json[0] )})
      .then(this.fetchmemberCertification())
      .catch( err => {
        console.error('RECORD EDIT ERROR:');
        console.error(err);
      });
      this.handleReset();
      this.fetchmemberCertification();
    },
    handleDelete(event) {
      fetch('api/memberCertis/delete.php', {
        method: 'POST',
        body: JSON.stringify(this.assignedCerti),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then(json => { memberCertificationsApp.membercertifications = json })
      .then(this.fetchmemberCertification())
      .catch( err => {
        console.error('RECORD DELETE ERROR:');
        console.error(err);
      });
      this.handleReset();
      this.fetchmemberCertification();
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchmemberCertification();
  }
});
