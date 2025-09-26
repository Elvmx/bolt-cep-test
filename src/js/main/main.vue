<template>
    <div class="p-4" :style="{ backgroundColor: backgroundColor }">
        <div class="grid grid-cols-3 gap-2 flex-wrap">
            <button class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" @click="onClick('helloWorld')">Primary Button</button>
            <button class="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Secondary Button</button>
            <button class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">Danger Button</button>
            <button class="bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed" disabled>Disabled Button</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { subscribeBackgroundColor, evalTS } from "../lib/utils/bolt";

const backgroundColor = ref("#282c34");

const onClick = (functionName: string, ...rest: any[]) => {
    // @ts-ignore
    evalTS(functionName, ...rest).catch((e) => {
        alert(e.message);
    });
};

onMounted(() => {
    if (window.cep) {
        subscribeBackgroundColor((c: string) => (backgroundColor.value = c));
    }

    console.log(navigator.userAgent);
});
</script>
