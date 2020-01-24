<template>
  <nav>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="year in years" :key="year">
          <router-link :to="{ name: 'year', params: { year: year } }">
            <span>{{ year }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "Nav",
  components: {},
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 0
    });
  },
  computed: {
    years() {
      return this.range(1990, 2019).reverse();
    }
  },
  methods: {
    range(start, end) {
      let foo = [];
      for (let i = start; i <= end; i++) {
        foo.push(i);
      }
      return foo;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/_swiper";

nav {
  background: #222222;
  position: sticky;
  top: 0;
  .swiper-slide {
    width: 100px;
    height: 50px;
    display: flex;
  }
  a {
    color: #ffffff;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
