import { defineConfig } from 'unocss';
import { preset } from 'unonative/preset';

export default defineConfig({
  presets: [...preset],
  theme: {
    colors: {
      primary: 'red',
    }
  }
});
