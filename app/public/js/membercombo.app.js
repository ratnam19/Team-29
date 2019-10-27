var memberCombinationApp = new Vue({
  el: '#memberCombinationApp',
  data: {
    membercombination: [],
    persons: [],
    certifications: [],
    filter: {
    certificationName: '',
    personId: ''
   }
  },
  methods: {
    fetchmemberCombination() {
      fetch('api/reports/index.php')
      .then(response => response.json())
      .then(json => { memberCombinationApp.membercombination = json })
    },
    fetchMembers() {
      fetch('api/reports/fetchPersons.php')
      .then(response => response.json())
      .then(json => { memberCombinationApp.persons = json })
    },
    fetchCertifications() {
      fetch('api/reports/fetchCertis.php')
      .then(response => response.json())
      .then(json => { memberCombinationApp.certifications = json })
    }
  },
  created() {
    this.fetchmemberCombination();
    this.fetchMembers();
    this.fetchCertifications();
  }
});
