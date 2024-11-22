import { defineStore } from 'pinia'
import {ref, computed} from 'vue'

export const useStudentStore = defineStore('students', () =>{

    const studentList = ref([
        {name: 'Bobby Smith', starID: 'dv87987uy', present: false},
        {name: 'Mary Joe', starID: 'az42117br', present: false}
    ])

    const mostRecentStudent = ref({}) //empt object

    function addNewStudent(student){
        studentList.value.push(student)
    }

    function deleteStudent(studentToDelete){
        studentList.value = studentList.value.filter((student)=>{
            return studentToDelete != student
        })
    }

    function arrivedOrLeft(student){
        mostRecentStudent.value = student
    }

    return{
        //reactive data
        studentList,
        mostRecentStudent,

        //functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft
    }

})