/**
 * Config options at: http://requirejs.org/docs/api.html#config
 */
require.config({
    
    shim: {
        // Add shims for things here
        'jquery-ui': {
            deps: ['jquery']
        },
        'bootstrap-tooltip': {
            deps: ['jquery']
        },
        'jquery.dropkick': {
            deps: ['jquery']
        },
        'jquery.tagsinput': {
            deps: ['jquery']
        },
        'custom-checkbox': {
            deps: ['jquery']
        },
        'custom-radio': {
            deps: ['jquery']
        }
    },

    paths: {
        //
        //  This is where you can add paths to any plugins or vendor scripts.
        //

        // Plugins
        'text': 'plugins/text',
        'json': 'plugins/json',
        'tpl' : 'plugins/tpl',
        'async' : 'plugins/async',

        // Templating
        'dot' : 'vendor/doT',

        // MVC
        'stapes': 'vendor/stapes',
        
        // jQuery
        'jquery': 'vendor/jquery',
        'jquery-ui': 'vendor/jquery-ui-1.10.0.custom.min',
        'jquery.dropkick': 'vendor/jquery.dropkick-1.0.0',
        'bootstrap-tooltip': 'vendor/bootstrap-tooltip',
        'jquery.tagsinput': 'vendor/jquery.tagsinput',
        'custom-checkbox': 'vendor/flat-ui/custom_checkbox_and_radio',
        'custom-radio': 'vendor/flat-ui/custom_radio'
    },

    map: {
        
        '*' : {
            // 'jquery': 'modules/adapters/jquery', // jQuery noconflict adapter
            'site-config': 'config/site-config.json'
        },

        'modules/adapters/jquery': {
            'jquery': 'jquery'
        }
    }
});
