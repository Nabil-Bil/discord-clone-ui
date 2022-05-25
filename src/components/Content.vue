<template>
    <div class="bg-primary dark:bg-darkPrimary h-screen ml-[367px] overflow-y-scroll py-16">
        <div class="px-10 py-5 ">
            <MessageVue v-for="message of messages" :key="message.imageUrl" :imageUrl="message.imageUrl"
                :username="message.username" :message="message.message" :createdAt="message.createdAt"></MessageVue>

        </div>
        <div class="fixed bottom-2 ml-10 w-[75vw]">
            <input type="text"
                class="w-full focus:outline-none border-none h-12 rounded-lg px-10 text-md font-medium bg-gray-300 text-neutral-500 placeholder:text-neutral-500 dark:bg-[#4f545c] dark:text-gray-300"
                placeholder="Enter message..." />
            <PlusCircleIcon class="absolute left-2 bottom-3 cursor-pointer text-green-500" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import PlusCircleIcon from "vue-material-design-icons/PlusCircle.vue"
import MessageVue from "./Message.vue";
import { faker } from "@faker-js/faker"
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-male-sprites';

const messages: {
    imageUrl: string,
    username: string,
    message: string,
    createdAt: string
}[] = [

    ]
const messageNumber:number=20

for(let i:number=0;i<messageNumber;i++){
    messages[i]={
    imageUrl: createAvatar(style,),
    username: faker.name.findName(),
    message: faker.lorem.sentences(),
    createdAt: `${faker.date.birthdate().getHours()}:${faker.date.birthdate().getMinutes()} `
    }
}
</script>