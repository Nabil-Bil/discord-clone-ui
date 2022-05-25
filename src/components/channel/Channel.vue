<template>
    <div class="flex justify-between px-2 text-gray-500 items-center cursor-pointer py-1"
        @click="isChannelsDisplayed = !isChannelsDisplayed">
        <div>
            <h3 class="text-lg font-semibold flex items-center">
                <ChevronRight class="transition-all ease-in duration-200" :class="isChannelsDisplayed ? 'rotate-90' : ''" />
                <span :class="isChannelsDisplayed ? 'text-blue-500' : ''">{{ props.title }}</span>
            </h3>
        </div>
        <i class="text-2xl font-bold ">+</i>
    </div>
    <div v-for="channel of props.channels" :key="channel"
        class="ml-6 cursor-pointer " v-if="isChannelsDisplayed == true">
        <span class="font-bold text-2xl text-gray-300 ">#</span> <span
            class="text-gray-500 font-semibold text-md hover:text-pink-400 transition-all ease-in   ">{{
                    channel
            }}</span>
    </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import ChevronRight from "vue-material-design-icons/ChevronRight.vue"
const props: any = defineProps({
    title: String,
    channels: Array,
})
const isChannelsDisplayed: Ref<boolean> = ref(true)

</script>