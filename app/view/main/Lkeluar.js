Ext.define('Inventori.view.main.Lkeluar', {
extend: 'Ext.grid.Grid',
    alias: 'view.lkeluar',
    xtype: 'keluarlist',

    requires: [
        'Inventori.store.Liskeluar'
    ],

    store: {
        type: 'liskeluar'
    },

    columns: [
        { text: '', dataIndex: 'id_brg_keluar', hidden: true },
        { text: '', dataIndex: 'id_barang', hidden: true },
        { text: '', dataIndex: 'jumlah_barang', hidden: true }, 
        { text: 'Nama Barang',  dataIndex: 'nama_barang', width: 230 },
        { text: 'Kategori', dataIndex: 'nama_kategori', width: 120 },
        { text: 'Jumlah', dataIndex: 'jumlah_barang_keluar', width: 120 },
        { text: 'Satuan', dataIndex: 'nama_satuan', width: 120 },
        { text: 'Tanggal', dataIndex: 'tgl_keluar', width: 180 },
        { text: 'Jurusan', dataIndex: 'nama_jurusan', width: 120 },
        { text: 'Keterangan', dataIndex: 'keterangan', width: 230 },
        { text: 'Admin', dataIndex: 'nama_user', width: 120 },
        { text: 'Hapus',
            width: 100,
            ignoreExport: true,
            cell: {
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    iconCls: 'x-fa fa-trash-o',
                    ui: 'action',
                    handler: function(btn) {
                        record = btn.getParent();
                        cell = record.getRecord();
                        Ext.getStore('liskeluar').remove(cell);
                        Ext.getStore('liskeluar').load();
                        Ext.getStore('lisbarang').load();
                    }
                }

                 }
        }
    ],
    items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            items: [
                {
                xtype: 'searchfield',
                    placeHolder: 'Nama Barang',
                    id: 'namacari2',
                    name: 'namacari2',
                    iconCls: 'x-fa fa-search',
                    listeners: {
                        change: function(){
                            caris = Ext.getCmp('namacari2').getValue();
                            Ext.getStore('liskeluar').filter('nama_barang' , caris);
                        }
                    }   
                },
                {
                    text: ''
                },
                {
                    xtype: 'button',           
                    iconCls: 'x-fa fa-plus',
                    name: 'butadd3',
                    handler: function() {
                    if (!this.overlay) {
                    this.overlay = Ext.Viewport.add({
                        xtype: 'Tbhkeluar',
                        floated: true,
                        modal: true,
                        hideOnMaskTap: true,
                        showAnimation: {
                            type: 'popIn',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        hideAnimation: {
                            type: 'popOut',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        centered: true,
                        width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 340 : 340,
                        maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 220 : 220,
                        styleHtmlContent: true,
                        scrollable: true
                    });
                }

                this.overlay.show();
                }


                },
                {

                    xtype: 'button',                   
                    iconCls: 'x-fa fa-pencil',
                    id: 'showedtb2',
                    name: 'showedtb2',
                    disabled: true,
                    bind: '',
                    handler: function() {
                    if (!this.overlay) {
                    this.overlay = Ext.Viewport.add({
                        xtype: 'Edtkeluar',
                        floated: true,
                        modal: true,
                        hideOnMaskTap: true,
                        showAnimation: {
                            type: 'popIn',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        hideAnimation: {
                            type: 'popOut',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        centered: true,
                        width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 240 : 340,
                        maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 430 : 430,
                        styleHtmlContent: true,
                        scrollable: true
                    });
                }
                this.overlay.show();
                record = Ext.getCmp('lkeluar').getSelection();  
                Ext.getCmp('id_brg_keluar').setValue(record.data.id_brg_keluar);
                Ext.getCmp('id_barangk').setValue(record.data.id_barang);
                Ext.getCmp('nama_brg_keluar').setValue(record.data.nama_barang);
                Ext.getCmp('nama_jurusan_keluar').setValue(record.data.nama_jurusan);
                Ext.getCmp('jumlah_keluar').setValue(record.data.jumlah_barang_keluar);
                Ext.getCmp('ket_brgkeluar').setValue(record.data.keterangan);
                Ext.getCmp('stok1').setValue(record.data.jumlah_barang);
                Ext.getCmp('jumlah_keluar').setMaxValue(record.data.jumlah_barang);
                }
                }                
                
            ]
        }
        ],

    //listeners: {
      //  select: 'onItemSelected'
    //}
});
