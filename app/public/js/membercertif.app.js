var memberCertificationsApp = new Vue({
  el: '#memberCertificationsApp',
  data: {
    membercertifications: [],
    assignedCerti: {},
    selectedAssignCerti: {},
    persons : [],
    certifications :[]
  },
  methods: {
    fetchmemberCertification() {
      fetch('api/memberCertis/index.php')
      .then(response => response.json())
      .then(json => { memberCertificationsApp.membercertifications = json })
    },
    fetchMembers() {
      fetch('api/list/index.php')
      .then(response => response.json())
      .then(json => { memberCertificationsApp.persons = json })
    },
    fetchCertifications() {
      fetch('api/certification/index.php')
      .then(response => response.json())
      .then(json => { memberCertificationsApp.certifications = json })
    },
    handleSubmit(event) {
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
      .catch( err => {
        console.error('RECORD EDIT ERROR:');
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
    handleRowClick(m) {
      memberCertificationsApp.selectedAssignCerti = m;
    },
    handleEdit(event) {
      fetch('api/memberCertis/edit.php', {
        method: 'POST',
        body: JSON.stringify(this.selectedAssignCerti),
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
        body: JSON.stringify(this.selectedAssignCerti),
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
    this.fetchMembers();
    this.fetchCertifications();
  }
});
