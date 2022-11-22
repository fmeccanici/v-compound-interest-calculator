import { createApp } from 'vue'
import './style.css'
import CompoundInterestCalculator from "./components/CompoundInterestCalculator.vue";

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("v-compound-interest-calculator", CompoundInterestCalculator);
}

const plugin = {
    install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

CompoundInterestCalculator.install = install;

createApp(CompoundInterestCalculator).mount('#app')
