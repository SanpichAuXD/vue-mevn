<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <form @submit.prevent="handleUpdateForm" action="" class="mt-3">
                <div class="form-group m-2">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="student.name" name="name" id="" required>
                </div>
                <div class="form-group m-2">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" v-model="student.email" name="email" id="" required>
                </div>
                <div class="form-group m-2">
                    <label for="name">Phone</label>
                    <input type="text" class="form-control" v-model="student.phone"     name="phone" id="" required>
                </div>
                <div class="form-group m-2">
                    <button class="btn btn-success btn-block">Create</button>
                </div>
            </form>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            student:{}
        }
    },
    created() {
        let apiUrl = `http://127.0.0.1:4000/api/edit-student/${this.$route.params.id}`
        axios.get(apiUrl).then((res)=> {
            this.student = res.data
        })
    },
    methods: {
        handleUpdateForm(){
            let apiUrl = `http://127.0.0.1:4000/api/update-student/${this.$route.params.id}`
            axios.put(apiUrl, this.student).then((res) =>{
                console.log(res)
                this.$router.push('/view')
            }).catch(error =>{
                console.log(error)
            })
        }
    },
}
</script>
<style>
    
</style>