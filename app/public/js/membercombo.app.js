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
      fetch('api/list/index.php')
      .then(response => response.json())
      .then(json => { memberCombinationApp.persons = json })
    },
    fetchCertifications() {
      fetch('api/certification/index.php')
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
