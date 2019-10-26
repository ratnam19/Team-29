var waitingApp = new Vue({
  el: '#personWaitingApp',
  data: {
    person: []
  },
  methods: {
    fetchPersons() {
      fetch('api/waiting/')
      .then(response => response.json())
      .then(json => { waitingApp.person = json })
    },
    formatLocalVisitDate(d){
      return moment.utc(d).local().format("HH:mm MMM Do"); //pass as utc then format it to local time
    },
    sinceLocalVisitDate(d){
      return moment.utc(d).local().fromNow();
    }
  },
  created() {
    this.fetchPersons();
  }
});
