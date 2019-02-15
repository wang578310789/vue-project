<template>
  <div>
    <city-head></city-head>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
    <city-word :cities="cities"></city-word>
  </div>
</template>
<script>
import CityHead from "./components/head";
import CitySearch from "./components/search";
import CityList from "./components/List";
import CityWord from "./components/word";
import { CityModel } from "../../models/CityModel";
const cityModel = new CityModel();
export default {
  name: "City",
  components: {
    CityHead,
    CitySearch,
    CityList,
    CityWord
  },
  data() {
    return {
      hotCities: [],
      cities: []
    };
  },
  mounted() {
    cityModel.getCity().then(res => {
      var data = res.data.data;
      var {hotCities,cities} = data;
      this.hotCities = hotCities;
      this.cities = cities;
    });
  }
};
</script>
<style lang="scss" scoped>
</style>
