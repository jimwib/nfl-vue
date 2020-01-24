<template>
  <div>
    <div class="year">Year: {{ year }}</div>
    <div class="weeks">{{ currentYear }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Year",
  props: ["year"],
  computed: {
    ...mapGetters({
      getData: "getData"
    }),
    async currentYear() {
      let year = this.getData({
        property: "years",
        key: this.year
      });

      if (year === undefined) {
        year = await this.getYear(this.year);
        console.log(year);

        return year;
      } else {
        return year;
      }
    }
  },
  methods: {
    ...mapActions({
      fetchData: "fetchData"
    }),
    async getYear(year) {
      let data = await this.fetchData({
        body: year,
        url: year,
        key: year,
        stateProperty: "years",
        commit: true
      });
      return data;
    }
  }
};
</script>
<style lang="scss">
.year {
  color: #000;
  padding: 1.5em 1.2em;
  background: #ccc;
  position: sticky;
  top: 50px;
}
.weeks {
  background: #666;
}
</style>
