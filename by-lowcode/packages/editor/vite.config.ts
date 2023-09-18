import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Unocss from 'unocss/vite';
import presetUno from '@unocss/preset-uno';
import VueDevTools from 'vite-plugin-vue-devtools';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueDevTools(),
    vue(),
    VueJsx(),
    AutoImport({
      imports: [
        'vue', // 导入内置的所有api
        // 'vue-router',
        // 'pinia',
      ],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    Unocss({
      presets: [presetUno()],
    }),
  ],
});
