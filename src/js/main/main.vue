<script setup lang="ts">
import { onMounted, ref } from "vue";
import { os, path } from "../lib/cep/node";
import { csi, evalES, openLinkInBrowser, subscribeBackgroundColor, evalTS } from "../lib/utils/bolt";

const backgroundColor = ref("#282c34");

const count = ref(0);

//* Demonstration of Traditional string eval-based ExtendScript Interaction
const jsxTest = () => {
    console.log(evalES(`helloWorld("${csi.getApplicationID()}")`));
};

//* Demonstration of End-to-End Type-safe ExtendScript Interaction
const jsxTestTS = () => {
    evalTS("helloStr", "test")
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            alert("catch: " + err);
        });
    // evalTS("helloNum", 1000).then((res) => {
    //   console.log(typeof res, res);
    // });
    // evalTS("helloArrayStr", ["ddddd", "aaaaaa", "zzzzzzz"]).then((res) => {
    //   console.log(typeof res, res);
    // });
    // evalTS("helloObj", { height: 90, width: 100 }).then((res) => {
    //   console.log(typeof res, res);
    //   console.log(res.x);
    //   console.log(res.y);
    // });
    // evalTS("helloVoid").then(() => {
    //   console.log("function returning void complete");
    // });
    // evalTS("helloError", "test").catch((e) => {
    //   console.log("there was an error", e);
    // });
};

const nodeTest = () => {
    alert(`Node.js ${process.version}\nPlatform: ${os.platform}\nFolder: ${path.basename(window.cep_node.global.__dirname)}`);
};

onMounted(() => {
    if (window.cep) {
        subscribeBackgroundColor((c: string) => (backgroundColor.value = c));
    }
});
</script>

<template>
    <div class="app" :style="{ backgroundColor: backgroundColor }">
        <header class="app-header">
            <div class="button-group">
                <button class="bg-blue-500" @click="jsxTestTS">Ts</button>
            </div>

            <p>{{ $t("greeting") }}</p>
            <p>
                <button @click="() => openLinkInBrowser('https://github.com/hyperbrew/bolt-cep')">Bolt Docs</button>
                |
                <button @click="() => openLinkInBrowser('https://v3.vuejs.org/')">Vue Docs</button>
                |
                <button @click="() => openLinkInBrowser('https://vitejs.dev/guide/features.html')">Vite Docs</button>
            </p>
        </header>
    </div>
</template>

<style lang="scss">
@use "../variables.scss" as *;
</style>
