// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  build: {
    assets: 'assets'
  },
  markdown: {
    shikiConfig: {
      // IMPORTANT: This theme only applies to markdown (.md) files
      // To change the theme for code blocks in .astro files, also update:
      // src/components/CodeBlock.astro line 25
      theme: 'min-light',
      langs: ['html', 'css', 'javascript', 'json', 'markdown', 'bash', 'text'],
      wrap: true
    }
  }
});