/**
 * Demonstrates a very simple tab panel with 3 tabs
 */
Ext.define('Inventori.view.main.Tabbarulain', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabbarulain',
    
    shadow: true,
    cls: 'demo-solid-background',
    tabBar: {
        layout: {
            pack: 'center'
        }
    },
    activeTab: 1,
    defaults: {
        scrollable: true
    },
    items: [
        {
            title: 'Kategori',
            iconCls: 'x-fa fa-cubes',
            layout: 'fit',
            items: [{
               xtype: 'kategorilist'
             }],
            cls: 'card'
        },
        {
            title: 'Satuan',
            iconCls: 'x-fa fa-cube',
            layout: 'fit',
            items: [{
               xtype: 'satuanlist'
             }],
            cls: 'card'
        },
        {
            title: 'Jurusan',
            iconCls: 'x-fa fa-mortar-board',
            layout: 'fit',
            items: [{
               xtype: 'jurusanlist'
             }],
            cls: 'card'
        }
    ]
});