const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfResume',

  exposes: {
    './ResumeModule': './projects/mf-resume/src/app/resume/resume.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  //sharedMappings: ["@commons-lib"],
});
