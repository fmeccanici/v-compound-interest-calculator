<template>
    <input-field-leading-add-on label="Interest rate" type="text" name="money" id="money" add-on="%" :value="interestRateInPercentages" @input="handleInterestRateInPercentagesChange"></input-field-leading-add-on>
</template>

<script>
import InputFieldLeadingAddOn from './InputFieldLeadingAddOn.vue';

export default {
    name: "InterestRate",
    components: {
      InputFieldLeadingAddOn
    },
    data() {
        return {
            interestRateInPercentages : 7
        }
    },
    methods: {
        handleInterestRateInPercentagesChange() {
            this.$emit('interest-rate-update', this.interestRateInPercentages);
        }
    }
}
</script>

<style scoped>

</style>
