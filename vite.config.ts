import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),

    // 自动导入Vue API，如ref, reactive等
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-imports.d.ts",
    }),
    // 自动按需导入组件
    Components({
      resolvers: [AntDesignVueResolver()],
      dts: "src/components.d.ts",
    }),
  ],
});
