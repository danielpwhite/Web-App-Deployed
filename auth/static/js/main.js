const app = new Vue({
  el: '#app',
  data: {
    // Your data properties will go here
  },
  methods: {
    onSubmit: function(event) {
      event.preventDefault();
      alert('Form submitted');
    },
  },
});