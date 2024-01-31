<!-- Slider.vue -->
<template>
    <div class="slider-container flex flex-col gap-8">
    <div class="slider flex gap-4 justify-center items-center" :style="{ transform: 'translateX(' + position + 'px)' }">
      <div v-for="(item, index) in items" :key="index" class="slide">
        <img :src="item.url" :alt="item.alt" class="w-48 h-48 border-black border-2 rounded-[100px]">
      </div>
    </div>
    <div class="buttons flex justify-center items-center">
        <button @click="prevSlide" class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Previous</button>
        <button @click="nextSlide" class="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
    </div>
    
  </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        position: 0,
        currentIndex: 0,
        items: [
        { url: 'https://bituriges.com/bvg8-louane-lou/wp-content/uploads/sites/16/2023/02/44f8b3c131339c5e042de1986cdefda0e17e92f5_C7555_1-1024x768.jpeg', alt: '1' },
        { url: 'https://bituriges.com/bvg8-louane-lou/wp-content/uploads/sites/16/2023/02/TOC_Mulhouse_3-1024x768.jpeg', alt: '2' },
        { url: 'https://bituriges.com/bvg8-louane-lou/wp-content/uploads/sites/16/2023/02/8974797832222.png', alt: '3' },
        { url: 'https://bituriges.com/bvg8-louane-lou/wp-content/uploads/sites/16/2023/02/haagen-dazs-charleroi.jpeg.webp', alt: '4' },
        { url: 'https://bituriges.com/bvg8-louane-lou/wp-content/uploads/sites/16/2023/03/B-1.jpg', alt: '5' },
        { url: 'https://bituriges.com/bvg8-louane-lou/wp-content/uploads/sites/16/2023/02/44f8b3c131339c5e042de1986cdefda0e17e92f5_C7555_1-1024x768.jpeg', alt: '1' },
        { url: 'https://bituriges.com/bvg8-louane-lou/wp-content/uploads/sites/16/2023/02/TOC_Mulhouse_3-1024x768.jpeg', alt: '2' },
        { url: 'https://bituriges.com/bvg8-louane-lou/wp-content/uploads/sites/16/2023/02/8974797832222.png', alt: '3' },
        { url: 'https://bituriges.com/bvg8-louane-lou/wp-content/uploads/sites/16/2023/02/haagen-dazs-charleroi.jpeg.webp', alt: '4' },
        { url: 'https://bituriges.com/bvg8-louane-lou/wp-content/uploads/sites/16/2023/03/B-1.jpg', alt: '5' },
      ],
        slideWidth: 300, // Ajustez la largeur du slide selon vos besoins
      };
    },
    methods: {
        prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.items.length - 1;
      }
      this.updatePosition();
    },
    nextSlide() {
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.updatePosition();
    },
    updatePosition() {
      this.position = -this.currentIndex * this.slideWidth;
    },
    },
  };
  </script>
  
  <style scoped>
  /* Utilisez les classes Tailwind CSS ici si nécessaire */
  .slider-container {
    position: relative;
    overflow: hidden;
  }
  
  .slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .slide {
    flex: 0 0 auto;
  }
  </style>
  