<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            
            <h1>Show students</h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-stripe">
                        <thead class="thead-dark">
                            <tr> 
                                <th>Name</th>
                                <th>email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student in Student" :key="student._id">
                                <td>{{student.name}}</td>
                                <td>{{student.email}}</td>
                                <td>{{student.phone}}</td>
                                <td>
                                    <routerLink :to="{name:'edit',params: {id:student._id}}" class="btn btn-success">
                                        Edit
                                    </routerLink>
                                    <button @click.prevent="deleteStudent(student._id)" class="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            Student:[]
        }
    },
    created(){
        let apiUrl = 'http://127.0.0.1:4000/api'
        axios.get(apiUrl).then(res =>{
            this.Student = res.data
        }).catch(error =>{
            console.log(error)
        })
    },
    methods:{
        deleteStudent(id){
            let apiUrl = `http://127.0.0.1:4000/api/delete-student/${id}`
            let indexOfArray =  this.Student.findIndex(i => i._id === id)

            if(window.confirm("Do you want to delete this? ")){
                axios.delete(apiUrl).then(() => {
                    this.Student.splice(indexOfArray, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>
<style>
    
</style>