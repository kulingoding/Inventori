/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('Inventori.view.main.barang.addMasuk', {
    extend: 'Ext.form.Panel',
    xtype: 'Tbhmasuk',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio',
        'Inventori.view.main.MainController',
        'Inventori.view.main.MainModel'

    ],
      controller: 'main',
    viewModel: 'main',
    shadow: true,
    cls: 'demo-solid-background',
    id: 'tmasukfrm',
    items:[{
            xtype: 'fieldset',
            id: 'fieldset2',
            title: 'Tambah Barang Masuk',

            default:{
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'namab',
                    label: 'Nama Barang',
                    placeHolder: 'Nama Barang',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'spinnerfield',
                    name: 'jumlahb',
                    label: 'Jumlah',
                    minValue: 0,
                    maxValue: 9999,
                    clearable: true,
                    stepValue: 1,
                    cycle: true,
                },
                {
                    docked: 'bottom',
                    defaults: {
                     xtype: 'button',
                    style: 'margin: 1em',
                    flex: 1
                    },
                    items:[
                    {
                        xtype: 'button',
                        text: 'OK',
                        ui: 'action',
                        scope: this,
                        listeners:{
                            tap: 'tambahB'
                        }

                    },
                    {
                        xtype: 'button',
                        text: 'Reset',
                        ui: 'action',
                        handler: function(){
                        Ext.getCmp('tmasukfrm').reset();
                    }
                    }
                    ]
                }
                


                    ]
    }]
    
});