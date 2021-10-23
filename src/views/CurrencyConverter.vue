<template>
  <div class="currencytable">
    <input type="number" id="amount" name="amount"><br>
    <p> {{currency}} </p>
    <p> {{result}} </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "currencytable",
  components: {
    // HelloWorld,
  },
};
</script>
