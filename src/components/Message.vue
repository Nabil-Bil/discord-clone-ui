<template>
    <div >
        <div class="my-3 flex items-center">
            <div class="w-14  rounded-full p-2 bg-white">
            <span  v-html="props.imageUrl"></span>
            </div>
            <h2 class="text-lg dark:text-gray-300 font-bold pl-4">{{ props.username }}</h2>
            <p class="px-3 text-sm dark:text-gray-400 font-mono">{{ props.createdAt }}</p>
        </div>
        <p class="dark:text-gray-300 px-20">{{ props.message }}</p>
    </div>
</template>


<script lang="ts" setup>

const props = defineProps({
    imageUrl: String,
    username: String,
    message: String,
    createdAt: String
})



</script>