import axios from 'axios'

export default {
    namespaced:true,
    state : {
        cars : []
    },
    getters : {
        allCars : (state) =>state.cars,
        carsLength : (state) =>state.cars.length,
        lastId : (state) => {
            if  (state.cars.length==0)
                return 1;
            return parseInt(state.cars[state.cars.length-1].id)+1;
        }
    },
    actions :{
        add  ({commit,state},car){
            axios.post('https://vue-poc.azurewebsites.net/api/cars', car).then(response=>{
                commit('addCar',car)
            }
            );
        },
        edit({commit,state},car) {
            var existingCar = state.cars.find(c=>c.id==car.id);
            if(existingCar){
                axios.put('https://vue-poc.azurewebsites.net/api/cars/' + existingCar.id, existingCar);
            }
          },
        getCars({ commit, state }) {
            axios.get('https://vue-poc.azurewebsites.net/api/cars/')
            .then(response => {
                commit('setCars',{cars:response.data});
        })
        },
        remove  ({commit,state},payload){
            axios.delete('https://vue-poc.azurewebsites.net/api/cars/'+ payload.carId).then(response=>{
                commit('removeCar',payload.index);
            }
            );
        },
    },
    mutations : {
        addCar (state,payload){
state.cars.push(payload);
        },
        removeCar (state,payload){
            state.cars.splice(payload,1);
                    },
        setCars(state,payload){
            state.cars = payload.cars;
        },
        edit(state,payload){
            var car = state.cars.find(c=>c.id==payload.id);
            if(car){
                Object.assign(car,payload);
            }
        }
    }
  }