Package.describe({
  summary: "User facing error messaging system. ",
  version: "1.0.0",
  git: ""
});

Package.onUse(function(api,where) {
  api.versionsFrom('METEOR@0.9.3');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js','errors_list.html', 'errors_list.js'], 'client');

  if (api.export )
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('errors');
  api.addFiles('errors_tests.js');
});

