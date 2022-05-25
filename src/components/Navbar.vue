<template>
    <div class="h-16 bg-primary dark:bg-darkPrimary  w-full drop-shadow-xl flex justify-between items-center pl-2 pr-96 fixed ml-[367px]">
        <h2 class="font-semibold lg:text-xl md:text-lg text-gray-500 flex items-center"><span
                class="font-bold text-3xl text-gray-600 px-1">#</span>
            tailwind-css</h2>
        <div class="flex text-gray-500 items-center">
            <span @click="darkmode.changeMode" class="px-2">
                <MoonWaningCrescentIcon v-if="darkmode.darkmode" class="transition-all hover:text-pink-400 cursor-pointer " />
                <WhiteBalanceSunnyIcon v-else class="transition-all hover:text-pink-400 cursor-pointer " />
            </span>
            <div class="relative">
                <input type="text" placeholder="Search..."
                    class=" text-gray-500 placeholder:text-gray-500  font-medium px-2 m md:w-36 lg:w-72 sm:w-24  h-9 focus:border-0 focus:outline-0 shadow-md bg-[#d4d7dc] dark:bg-[#4f545c]  rounded-md " />
                <MagnifyIcon class="absolute right-1 bottom-1.5"></MagnifyIcon>
            </div>
            <BellOutline class="px-2 transition-all hover:text-pink-400 cursor-pointer"></BellOutline>
            <AccountIcon class="px-2 transition-all hover:text-pink-400 cursor-pointer"></AccountIcon>
        </div>
    </div>
</template>


<script lang="ts" setup>
import MoonWaningCrescentIcon from "vue-material-design-icons/MoonWaningCrescent.vue"
import AccountIcon from "vue-material-design-icons/Account.vue"
import MagnifyIcon from "vue-material-design-icons/Magnify.vue"
import BellOutline from "vue-material-design-icons/BellOutline.vue"
import WhiteBalanceSunnyIcon from "vue-material-design-icons/WhiteBalanceSunny.vue"

import { useDarkMode } from "../stores/darkmode";
const darkmode = useDarkMode()





</script>