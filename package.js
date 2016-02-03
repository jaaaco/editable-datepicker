Package.describe({
    name: 'jaaaco:editable-datepicker',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Autosaving date picker for Bootstrap 3',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');

    api.use('jquery');
    api.use('ecmascript');
    api.use('blaze-html-templates','client');

    api.addFiles('datapicker/bootstrap-datepicker.js', ['client']);
    api.addFiles('datapicker/datepicker3.css', ['client']);
    api.addFiles('datepicker.html', ['client']);
    api.addFiles('datepicker.js', ['client']);
});
