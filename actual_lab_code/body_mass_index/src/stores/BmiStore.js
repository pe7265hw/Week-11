import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useBmiStore = defineStore('bmi', () =>{

    //variables to be used
    const userWeight = ref('')
    const userHeight = ref('')
    const bmi = ref('')



    const bMI = computed( () => {
      console.log(userHeight.value, userWeight.value)
      bmi.value = Math.round(userWeight.value / (userHeight.value * userHeight.value))

      return bmi.value
    })






    return {userWeight, userHeight, bMI}
})