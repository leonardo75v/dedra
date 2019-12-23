<template>
<div class="header">
  
   
   <button
      type="button"
      class="btn"
      @click="showModal"
    >
      Open Modal!
    </button>
        <Menu
      v-show="isModalVisible"
      @close="closeModal"
    />
    </div>
</template>


<script>
import Menu from './Menu';
 export default {
 name: 'CHead',
    data () {
        return {
            isModalVisible: false,
        };
    },
    components: {
      Menu
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    },
 }
</script>