<template>
  <div id="tableDemo">
    <h1>{{msg}}</h1>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Power</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(car, index) in cars" :key="car.id">
                    <td><span class="tag">{{car.id}}</span></td>
                    <td v-if="isEditable(index)">
                        <!-- <input :value="car.brand" @input="UpdateCar(car.id,'brand',$event)" type="text"> -->
                        <input v-model="car.brand" type="text">
                    </td>
                    <td v-else>{{car.brand}}</td>
                    <td v-if="isEditable(index)">
                        <input :value="car.model"  @input="UpdateCar(car.id,'model',$event)" type="text">
                    </td>
                    <td v-else>{{car.model}}</td>
                    <td v-if="isEditable(index)">
                        <input :value="car.power"  @input="UpdateCar(car.id,'power',$event)" type="number">
                    </td>
                    <td v-else>
                        <PowerPill :power="car.power"></PowerPill>
                    </td>
                    <td>
                        <a @click="edit(car.id)" class="button is-link is-rounded">{{isEditable(index) ? 'Finish' : 'Edit'}}</a>
                        <a @click="remove(car.id,index)" class="button is-danger is-rounded">Delete</a>
                    </td>
                </tr>
                <tr>
                    <td><span class="tag">{{this.lastId}}</span></td>
                    <td><input v-model="newCar.brand" type="text"></td>
                    <td><input v-model="newCar.model" type="text"></td>
                    <td><input v-model="newCar.power" type="number"></td>
                    <td><a @click="add()" class="button is-primary is-rounded">Add</a></td>
                </tr>
            </tbody>
        </table>
        <p>Total Fields: {{totalRows}}</p>
    </div>
  </div>
</template>

<script>
import PowerPill from '@/components/PowerPill.vue'
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TableDemo',
  components: {
      PowerPill
  },
  data() {     
      return {
          editables: [],
          currentId: 1,
          newCar: {
            //   id: this.lastId,
              brand: '',
              model: '',
              power: null
          },
      }
  },
  props: {
      msg: String
  },
  computed: {
       ...mapGetters({cars:'car/allCars',totalRows:'car/carsLength',lastId:'car/lastId'})
  },

  methods: {
      UpdateCar (carId,prop,event){
this.$store.commit('car/edit',{id:carId, [prop]:event.target.value});
      },
      isEditable(index) {
          return true;
      },
      edit(carId) {
this.$store.dispatch('car/edit',{id:carId});
          
        //   this.$store.
        //   axios.put('https://vue-poc.azurewebsites.net/api/cars/' + this.cars[index].id, this.cars[index]);
        //   if(this.editables.includes(index)) this.editables.splice(this.editables.indexOf(index), 1);
        //   else this.editables.push(index);
      },
      generateNewCar() {
          return {  brand: '', model: '', power: null };
      },
      remove (carId,index) {
          this.$store.dispatch('car/remove',{carId : parseInt(carId),index:index});
          
        //   axios.delete('https://vue-poc.azurewebsites.net/api/cars/' + this.cars[index].id);
        //   this.cars.splice(index, 1);
          this.$notify({
                group: 'alerts',
                title: 'Deleted',
                text: 'Car deleted Successfully',
                type: 'success'
            });            
      },
      add() {
          this.newCar.id = this.lastId;
          this.$store.dispatch('car/add',this.newCar)
          this.newCar=this.generateNewCar();
          this.$notify({
                group: 'alerts',
                title: 'Deleted',
                text: 'Car created Successfully',
                type: 'success'
            });            
      }
  },
  beforeCreate() {
    this.$notify({
        group: 'alerts',
        title: 'Lifecycle Hook',
        text: 'Im in before created',
        type: 'info'
    });
  },
  created() {
    this.$notify({
        group: 'alerts',
        title: 'Lifecycle Hook',
        text: 'Ive been created',
        type: 'info'
    });
    this.$store.dispatch('car/getCars');
        // axios.get('https://vue-poc.azurewebsites.net/api/cars/')
        //     .then(response => {
        //     this.cars = response.data;
        //     this.currentId = parseInt(this.cars[this.cars.length - 1].id) + 1;
        //     this.newCar = this.generateNewCar(this.currentId);
        // })
  },
  beforeMount() {
    this.$notify({
        group: 'alerts',
        title: 'Lifecycle Hook',
        text: 'Im in before mount',
        type: 'success'
    });
  },
  mounted() {
    this.$notify({
        group: 'alerts',
        title: 'Lifecycle Hook',
        text: 'Ive been mounted',
        type: 'success'
    });
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    margin: 0 auto;
}
</style>
