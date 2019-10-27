var memberCombinationApp = new Vue({
  el: '#memberCombinationApp',
  data: {
    membercombination: [],
    persons: [],
    certifications: [],
    expiredCerti: {},
    filter: {
    certificationName: '',
    personId: ''
   }
  },
  computed: {
    now: function () {
      return Date.now()
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
    },
    expiredDate(c) {
      this.expiredCerti = c;
    if(moment(this.expiredCerti.expirationDate).isAfter(new Date(), 'day'))
     return false;
    else
     return true;
   }
  },
  created() {
    this.fetchmemberCombination();
    this.fetchMembers();
    this.fetchCertifications();
  }
});
