import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useBmiStore = defineStore('bmi', () =>{

    //variables to be used
    const userWeight = ref('')
    const userHeight = ref('')
    // const errors = ref([])
    // const bMI = ref('')

    const errors = computed( () => {   // errors the user will see 

      const error_list = [] 

      if (userHeight.value.length == 0){
          error_list.push('You must enter a height in meters.')
        }
        if (userHeight.value <= 0){
          error_list.push('You must enter a positive height in meters.')
        }
        if(userWeight.value.length == 0){
          error_list.push('You must enter a weight in Kilograms')
        }
        return error_list
    })

    // This will provide the BMI if it can be calculated.
    // 
    const bMI = computed ( () => {
        console.log(userHeight, userWeight)
        if (errors.value.length > 0) {  // there are errors 
          // ??? todo ??? for example 
          // return undefined,
          // return null
          // return -1 
          // something that means this can't be calculated 
      
        } else {
          const bmi = Math.round(userWeight.value / (userHeight.value * userHeight.value))
          return bmi
        }}
    )

    return {userWeight, userHeight, errors, bMI}
})