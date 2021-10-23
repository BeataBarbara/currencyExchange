<template>
  <div class="home">
 <table>
  <tr>
    <th>Currency</th>
    <th>Exange rate</th>
  </tr>
  <tr>
    <td> {{currency}}</td>
    <td> {{rate}} </td>
  </tr>
</table> 
  </div>
</template>

<script>

// import currency, rate from "@/AddCurrency.vue";

export default {
  name: "Add currency",
  components: {
    // HelloWorld,
  },
};
</script>
