import { defineStore } from "pinia"
import {ref, computed} from 'vue'

export const useStudentStore = defineStore('students', () =>{

    const studentList = ref([
        {name: 'Bobby Smith', starID: 'dv87987uy', present: false},
        {name: 'Mary Joe', starID: 'az42117br', present: false}
    ])

    const mostRecentStudents = ref({}) //empt object

    function addNewStudent(student){
        studentList.value.push(student)
    }

    function deleteStudent(studentToDelete){
        studentList.value = studentList.value.filter((student)=>{
            return studentToDelete != student
        })
    }

    function arrivedOrLeft(student){
        mostRecentStudents.value = student
    }

    return{
        //reactive data
        studentList,
        mostRecentStudents,

        //functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft
    }

})