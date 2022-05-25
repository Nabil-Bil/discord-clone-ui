<template>
    <div class=" w-72 bg-secondary dark:bg-darkSecondary fixed h-screen">
        <h1 class="font-bold text-xl m-4 text-gray-600 dark:text-gray-200">Channels</h1>

        <template v-for="channel of channelsList" :key="channel.title">
            <ChannelVue :title="channel.title" :channels="channel.channels"></ChannelVue>
        </template>

    </div>
</template>


<script lang="ts" setup>
import ChannelVue from './Channel.vue';

const channelsList:{ title: string, channels: string[] }[] = [
    {
        title: 'Topics',
        channels: ['tailwind-css', 'vue']
    },
    {
        title: 'Questions',
        channels: ['jit-compilation', 'purge-files', 'dark-mode']
    },
    {
        title: 'Random',
        channels: ['variants', 'plugins']
    },
]
</script>