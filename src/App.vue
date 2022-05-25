<script setup lang="ts">
import SideBarVue from "./components/sidebar/SideBar.vue"
import ChannelsVue from "./components/channel/Channels.vue";
import NavbarVue from "./components/Navbar.vue";
import { useDarkMode } from "./stores/darkmode";
import ContentVue from "./components/Content.vue"
import { onMounted } from "vue";
const darkmode=useDarkMode();

onMounted(()=>{
    const bodyClass=document.body.classList;
    darkmode.darkmode==true?bodyClass.add('dark'):bodyClass.remove('dark');
})
</script>

<template>
<div class="flex ">
<SideBarVue></SideBarVue>
<ChannelsVue class="ml-20"></ChannelsVue>
<div class="w-full">
<NavbarVue></NavbarVue>
<ContentVue/>

</div>

</div>



</template>

<style>
</style>