<script setup lang="ts">

</script>

<template>
  <div class="contact">
    <div class="inputFields">
      <div class="idInput">
        <input type="text" id="name" placeholder="Enter Name"/>
        <input type="text" id="email" placeholder="Enter email"/>
      </div>
      <textarea name="message" id="message" cols="45" rows="10" placeholder="Enter message"></textarea>
    </div>
    <button type="button">Submit</button>
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
</style>
