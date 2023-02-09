<template>
    <div class="backdrop">
      <div class="modal" :class="{ sale: theme === 'sale' }">
        <h1>{{ header }}</h1>
        <p>{{ text }}</p>
      </div>
    </div>
  </template>
<script>
export default {
    props: ['header','text', 'theme']
}
</script>
  
  <style>
    .modal {
      width: 500px;
      padding: 10px;
      margin: 150px auto;
      background: white;
      border-radius: 10px;

    }
    .backdrop {
      top: 0;
      position: fixed;
      background: rgba(0,0,0,0.5);
      width: 100%;
      height: 100%;
    }
    .modal h1 {
        color: aqua;
    }

    .modal.sale {
        background: crimson;
        color:white;
    }
    .modal.sale h1 {
        color: white;
    }

  </style>