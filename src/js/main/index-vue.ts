import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./main.vue";
import "./main.scss";
import { initBolt } from "../lib/utils/bolt";

import zhCN from "../locales/zh-CN.json";
import enUS from "../locales/en-US.json";

initBolt();

const i18n = createI18n({
    locale: "zh-CN",
    fallbackLocale: "en-US",
    messages: {
        "zh-CN": zhCN,
        "en-US": enUS,
    },
});

createApp(App).use(i18n).mount("#app");
