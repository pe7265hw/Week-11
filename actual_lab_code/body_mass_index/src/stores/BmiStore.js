import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useBmiStore = defineStore('bmi', () =>{

    //variables to be used
    const userWeight = ref('')
    const userHeight = ref('')
    const errors = ref([])
    const bMI = ref('')

    function determineUserBMI() {
        console.log(userHeight, userWeight)
        errors.value= []
        if (userHeight.value.length == 0){
          errors.value.push('You must enter a height in meters.')
        }
        if(userWeight.value.length == 0){
          errors.value.push('You must enter a weight in Kilograms')
        }
        if (errors.value.length > 0){
          alert(errors.value.join('\n'))
        }else{
          bMI.value = Math.round(userWeight.value / (userHeight.value * userHeight.value))
        }}


    return userWeight, userHeight, errors, bMI, determineUserBMI
})