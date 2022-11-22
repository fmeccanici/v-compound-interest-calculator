<template>
    <div class="flex justify-left space-x-10">
        <div class="flex flex-col">
            <input-field
                label="Years"
                :value="amountOfYears"
                required="true"
                type="text"
                @input-update="handleAmountOfYearsUpdate"
            ></input-field>
        </div>
        <div class="flex flex-col">

            <input-field
                label="Months"
                :value="amountOfMonths"
                required="true"
                type="text"
                @input-update="handleAmountOfMonthsUpdate"
            ></input-field>
        </div>
    </div>
</template>

<script>
import InputField from "./InputField.vue";

export default {
    name: "YearsAndMonths",
    components: {
      InputField
    },
    data() {
        return {
            amountOfYears: 20,
            amountOfMonths: 0
        }
    },
    methods: {
        handleAmountOfYearsUpdate() {
            this.$emit('amount-of-years-update', this.amountOfYears);
        },
        handleAmountOfMonthsUpdate() {
            this.$emit('amount-of-months-update', this.amountOfMonths);
        }
    }
}
</script>

<style scoped>

</style>
