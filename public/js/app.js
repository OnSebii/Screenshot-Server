let vm = new Vue({
  el: '#app',
  data: {
    id: '',
    name: '',
    image: '',
    price: '',
    soldBy: '',
    fruits: [],
  },
  async created() {
    this.getFruits();
  },
  methods: {
    async getFruits() {
      try {
        const { data } = await axios({
          url: '/fruits',
          method: 'GET',
        });
        this.fruits = data.result;
      } catch (error) {
        console.error(error);
      }
    },
    async addFruit() {
      try {
        await axios({
          url: '/fruits',
          method: 'POST',
          contentType: 'application/json',
          data: {
            fruit: {
              name: this.name,
              image: this.image,
              price: this.price,
              soldBy: this.soldBy,
            },
          },
        });
        this.getFruits();
      } catch (error) {
        console.error(error);
      }
    },
    copyData(fruit) {
      this.id = fruit.id;
      this.name = fruit.name;
      this.image = fruit.image;
      this.price = fruit.price;
      this.soldBy = fruit.soldBy;
    },
    updateFruit() {
      try {
        axios({
          url: `/fruits/${this.id}`,
          method: 'PUT',
          contentType: 'application/json',
          data: {
            fruit: {
              name: this.name,
              image: this.image,
              price: this.price,
              soldBy: this.soldBy,
            },
          },
        });
        this.getFruits();
      } catch (error) {
        console.error(error);
      }
    },
  },
});
