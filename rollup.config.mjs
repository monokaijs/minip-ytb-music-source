import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

const input = 'src/index.ts';
const BUNDLE_ALL_DEPS = false;
const extensions = ['.ts', '.tsx', '.js', '.jsx', '.mjs'];

const externalDeps = ['react-native', '@react-native-cookies/cookies', 'youtubei.js'];
const isExternal = (id) => {
  if (id.startsWith('.') || path.isAbsolute(id)) return false;
  return externalDeps.some(dep => id === dep || id.startsWith(dep + '/'));
};

const basePlugins = [
  resolve({ extensions, browser: false, preferBuiltins: true }),
  commonjs(),
  json(),
  typescript({
    tsconfig: 'tsconfig.json',
    useTsconfigDeclarationDir: false,
    clean: true,
    tslib: require.resolve('tslib'),
  }),
];

const minify = terser({ format: { comments: false } });

export default [
  {
    input,
    external: isExternal,
    plugins: basePlugins,
    output: { file: 'dist/index.esm.js', format: 'esm', sourcemap: false },
  },
  {
    input,
    external: isExternal,
    plugins: basePlugins,
    output: { file: 'dist/index.cjs', format: 'cjs', exports: 'auto', sourcemap: false },
  },
  {
    input,
    external: isExternal,
    plugins: [...basePlugins, minify],
    output: { file: 'dist/index.iife.min.js', format: 'iife', name: 'MyLibrary', sourcemap: false, globals: {
      'react-native': 'ReactNative',
      '@react-native-cookies/cookies': 'CookieManager',
      'youtubei.js': 'Innertube',
      'youtubei.js/react-native': 'Innertube'
    }},
  },
];
