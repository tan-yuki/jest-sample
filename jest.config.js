module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
    __DEV__: true,
  },
  setupFiles: ['./test/setup.ts'],
  transformIgnorePatterns: ["node_modules/(?!box-ui-elements).*"], // node_modulesのbox-ui-elementsは無視しない
};
