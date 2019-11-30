<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <form>
<h1 class="title is-1">
      {{form.formName}}
    </h1>

  <div class="field">
      <label class="label">Product Category</label>
      <div class="control">
        <div class="select">
          <select v-model="form.productCategory">
            <option v-for="pcatecory in ['Technology', 'Foods', 'Clothes']" :value="pcatecory">
              {{pcatecory}}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Product Name</label>
      <div class="control">
        <input class="input" type="text" v-model="form.productName" />
      </div>
    </div>

    <div class="field">
      <label class="label">Product Description</label>
      <div class="control">
        <input class="input" type="text" v-model="form.productDescription" />
      </div>
    </div>
    <div class="field">
      <label class="label">Set the inventory available</label>
      <div class="control">
        <input class="input" type="text" v-model="form.inventory" />
      </div>
    </div>
    
    <div class="field">
      <label class="label">Set the price</label>
      <div class="control">
        <input class="input" type="text" v-model="form.price" />
      </div>
    </div>
    <input class="button is-primary margin-bottom" type="submit" @click.prevent="fakeSubmit" />
  </form>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to your Marketplace',
      form: {
        formName: 'Product Registration',
        productCategory: 'Technology',
        productName: 'Type the product name here',
        productDescription: 'Type the product description here',
        favoriteColor: 'Red',
        inventory: '',
        price: '',
        workHours: 0,
      },
      showSubmitFeedback: false
    };
  },
  methods: {
    fakeSubmit(){
      this.showSubmitFeedback = true;
      setTimeout(() => {
        this.showSubmitFeedback = false;
      }, 3000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.margin-bottom {
  margin-bottom: 15px;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
</style>
