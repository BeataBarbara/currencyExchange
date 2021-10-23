<template>
  <div class="home">
     <selectCurrency /><br>
  <form action="submit">
    <input type="number" id="rate" name="rate"><br> <br>
    <input type="submit" value="Save currency"> <br>
</form> 

  </div>
</template>

<script>
// @ is an alias to /src
import selectCurrency from "@/components/selectCurrency.vue";

export default {
  name: "Home",
  components: {
    selectCurrency,
  },
};
</script>
