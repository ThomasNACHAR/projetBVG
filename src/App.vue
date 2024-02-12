<script>

import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import FooterMobile from "@/components/mobile/FooterMobile.vue"
import HeaderAdmin from "@/components/admin/HeaderAdmin.vue"

export default {
  components: {
    Header,
    Footer,
    FooterMobile,
  },
  data() {
    return {
      isMobile: this.checkIfMobile(),
      isAdmin: false
    }
  },
  methods: {
    checkIfMobile() {
      return window.innerWidth <= 1024
    },
    scrollTop() {
      document.documentElement.scrollTop = 0
    },
    isTop() {
      return window.scrollY === 0
    }
  },
  watch: {
    $route(to) {
      this.isAdmin = to.name === 'admin'
    }
  }
}

</script>

<template>
  <Header v-if="!isMobile&&!isAdmin"></Header>
  <RouterView></RouterView>
  <div class="mb-8"></div>
  <Footer v-if="!isMobile&&!isAdmin"></Footer>
  <FooterMobile v-if="isMobile&&!isAdmin"></FooterMobile>
  
</template>

<style>
</style>
