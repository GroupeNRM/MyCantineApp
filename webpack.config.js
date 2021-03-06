var Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    // Réfléchir au chemin de sortie si besoin
    .copyFiles({
        from: './assets/img'

        //to: 'images/[path][name].[ext]'
    })

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */

    //Commun
    .addEntry('app', './assets/js/app.js')

    //Register Page
    .addEntry('register', './assets/js/register.js')

    //Home Page
    .addEntry('home', './assets/js/home.js')
    //.addEntry('page2', './assets/js/page2.js')

    // Login Page
    .addEntry('login', './assets/js/login.js')

    // Reset Password
    .addEntry('reset', './assets/js/reset-password.js')

    // Dashboard Pages
    //Style commun aux Dashboard (users & admin)
    .addEntry('dashboard', './assets/js/dashboard.js')

    .addEntry('notification', './assets/js/notification.js')

    // New Meal 
    .addEntry('newMeal', './assets/js/newMeal.js')

    // Home Notifications
    .addEntry('listNotification', './assets/js/listNotification.js')

    // New Booking
    .addEntry('newBooking', './assets/js/newBooking.js')

    // Booking parent side
    .addEntry('parentNewBooking', './assets/js/parentNewBooking.js')

    // Error Pages
    .addEntry('error', './assets/js/error.js')

    // CRUD User
    .addEntry('user', './assets/js/user.js')

    .enableVueLoader()

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/js/admin.js')
;

module.exports = Encore.getWebpackConfig();
