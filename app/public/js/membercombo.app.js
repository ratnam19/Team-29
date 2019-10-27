var memberCombinationApp = new Vue({
  el: '#memberCombinationApp',
  data: {
    membercombination: [],
    filter: {
    certificationName: ''
  }
  },
  methods: {
    fetchmemberCombination() {
      fetch('api/reports/index.php')
      .then(response => response.json())
      .then(json => { memberCombinationApp.membercombination = json })
    }
  },
  created() {
    this.fetchmemberCombination();
  }
});
