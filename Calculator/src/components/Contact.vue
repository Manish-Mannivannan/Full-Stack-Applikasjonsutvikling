<script setup lang="ts">
  import { ref } from 'vue';
  import { nameAndEmailStore } from '@/stores/nameAndEmail';
  import axios from "axios";


  const storeNameAndEmail = nameAndEmailStore();
  let message = ref("");

  function validateName(): boolean{
    return /^[a-zA-Z]+ [a-zA-Z]+$/.test(storeNameAndEmail.name);
  }

  function validateEmail(): boolean {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(storeNameAndEmail.email);
  }
  
  function validateMessage(): boolean{
    return message.value != "";
  }

  function validateAll(): boolean{
    return validateName() && validateEmail() && validateMessage();
  }

  function submit() {
    axios
    .post("//jsonplaceholder.typicode.com/posts", {
      name: storeNameAndEmail.name,
      email: storeNameAndEmail.email,
      message: message.value,
    })
    .then((res) => {
      alert(
        "Name: " + res.data.name + ",\n"
        + "Email: " + res.data.email + ",\n"
        + "Message: " + res.data.message
      );
    })
    .catch((error) => {
      console.log("Error: " + error.response.status);
    });
  }
</script>


<template>
    <div class="contact">
      <h2>Contact us here</h2><br>
      <div class="inputFields">
        <div class="idInput">
          <input type="text" id="name" placeholder="Full Name" v-model="storeNameAndEmail.name">
          <input type="email" id="email" placeholder="Email" v-model="storeNameAndEmail.email">
        </div>
        <br>
        <textarea name="message" id="message" cols="63" rows="10" placeholder="Enter message" v-model="message"></textarea>
      </div>
      <button type="button" id="submit" @click="submit()" :disabled="!validateAll()">Submit</button>
    </div>
</template>

<style scoped>
  .contact{
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 60rem;
  }

  input{
    width: 20em;
  }
</style>
