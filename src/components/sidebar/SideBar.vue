<template>
    <div class="h-screen fixed w-20 shadow-lg flex flex-col items-center py-1 z-20 dark:bg-[#202225]">
        <ServerVue>
            <template #tooltip>
                🔥 tooltip
            </template>
            <FireIcon></FireIcon>
        </ServerVue>

        <div class="w-12 h-[2px] bg-gray-200  dark:bg-darkSecondary"></div>
        <ServerVue>
            <template #tooltip>
                🔥 tooltip
            </template>
            <FlashIcon></FlashIcon>
        </ServerVue>
        <ServerVue>
            <template #tooltip>
                🔥 tooltip
            </template>
            <PlusIcon></PlusIcon>
        </ServerVue>
        <ServerVue>
            <template #tooltip>
                🔥 tooltip
            </template>
            <CogOutlineIcon></CogOutlineIcon>
        </ServerVue>
        <div class="w-12 h-[2px] bg-gray-200 dark:bg-darkSecondary"></div>

        <ServerVue>
            <template #tooltip>
                🔥 tooltip
            </template>
            <AlienOutlineIcon></AlienOutlineIcon>
        </ServerVue>

    </div>

</template>


<script lang="ts" setup>
import ServerVue from './Server.vue';
import FireIcon from 'vue-material-design-icons/Fire.vue'
import FlashIcon from 'vue-material-design-icons/Flash.vue';
import PlusIcon from 'vue-material-design-icons/Plus.vue';
import CogOutlineIcon from 'vue-material-design-icons/CogOutline.vue';
import AlienOutlineIcon from 'vue-material-design-icons/AlienOutline.vue';
</script>