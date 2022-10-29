<template>
    <div class="modal-body">
      <template v-if="message" >
         <message :message="message" />
      </template>
      <form v-if="!message" @submit.prevent="resetPassword">
          <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Email address</label>
             <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <button type="submit"  class="btn  w-100 text-center btn-primary">Submit</button>
       </form>
       <div class="text-center mt-3">
          <p class="form-group col-12">
             Remember your password ?  <a  @click.prevent="change('login')" href="/login" class="color--primary bold">Login</a>
          </p>
       </div>
    </div>
</template>
    
<script>
import { reactive, ref } from 'vue' // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import axios from 'axios'
import Message from '../message/Message'

export default {
   emits: ["switched"],
   components: {
     Message
   },
   setup(props, { emit }) {
      const message = ref(null);
      const form = reactive({
         email: '',
      })
    
      function change (page)  {
         emit('switched', page)
      }

      function resetPassword () {
        // this.v$.$validate()
         axios.post('/password/email', form)
         .then((res) => {
           // location.reload()
         }).catch((err) => {
            console.log(err)
            message.value = "An email has been sent to " + form.email

         })
        // console.log(this.v$)
      }

      return {
         change,
         resetPassword,
         form,
         message
      }
   },

}
</script>