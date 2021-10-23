<template>
    <div class="selectCurrency">
    <label for="currency">Choose a currency:</label> <br>   
        <select name="currency" id="currency">
            <option value="EUR">Euro</option>
            <option value="GBP">British pound</option>
            <option value="PLN">Polish zloty</option>
            <option value="USD">United States dollar</option>
        </select> 
    </div>
</template>

<script>
export default {
    name: "selectCurrency"
    }
</script>