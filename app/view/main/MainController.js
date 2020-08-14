/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Inventori.view.main.MainController', {
    extend: 'Ext.app.ViewController',


    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
        
    
    
    carik: function(){
    Ext.Viewport.add(Ext.create('Inventori.view.main.barang.Barang'));
    },
    
    addUser: function(){
    uname = Ext.getCmp('uname').getValue();
    pwd = Ext.getCmp('pwd').getValue();
    nama = Ext.getCmp('namaus').getValue();
    akses = Ext.getCmp('akses').getValue();
    kontak = Ext.getCmp('kontak').getValue();
    store = Ext.getStore('lisuser');
    store.beginUpdate();
    store.insert(0, {'uname': uname, 'pwd': pwd, 'nama_user': nama, 'akses': akses, 'kontak': kontak});
    store.endUpdate();
    store.load();
    alert("Inserting..");
    Ext.getCmp('tuserfrm').reset();
    },
    editUser: function(){
    idu = Ext.getCmp('id_user').getValue();
    uname = Ext.getCmp('unamee').getValue();
    pwd = Ext.getCmp('pwde').getValue();
    nama = Ext.getCmp('namause').getValue();
    akses = Ext.getCmp('aksese').getValue();
    kontak = Ext.getCmp('kontake').getValue();
    store = Ext.getStore('lisuser');
    record = Ext.getCmp('luser').getSelection();
    index = store.indexOf(record);
    record = store.getAt(index);
    store.beginUpdate();
    record.set('id_user', idu);
    record.set('uname', uname);
    record.set('pwd', pwd);
    record.set('nama_user', nama);
    record.set('akses', akses);
    record.set('kontak', kontak);
    store.endUpdate();
    store.load();
    alert("Updatting..");
    },
    addJurusan: function(){
    nama_jurusan = Ext.getCmp('namajur').getValue();
    store = Ext.getStore('lisjurusan');
    store.beginUpdate();
    store.insert(0, {'nama_jurusan': nama_jurusan});
    store.endUpdate();
    store.load();
    alert("Inserting..");
    Ext.getCmp('tjurusanfrm').reset();
    },
    editJurusan: function(){
       id_jurusan = Ext.getCmp('id_jurusane').getValue();
       nama_jurusan = Ext.getCmp('nama_jurusane').getValue();
       store = Ext.getStore('lisjurusan');
       record = Ext.getCmp('ljurusan').getSelection();
       index = store.indexOf(record);
       record = store.getAt(index);
       store.beginUpdate();
       record.set('id_jurusan',id_jurusan);
       record.set('nama_jurusan',nama_jurusan);
       store.endUpdate();
       store.load();
       alert("Updatting..");   
    },
    addSatuan: function(){
    nama_satuan = Ext.getCmp('namasa').getValue();
    store = Ext.getStore('lissatuan');
    store.beginUpdate();
    store.insert(0, {'nama_satuan': nama_satuan});
    store.endUpdate();
    store.load();
    alert("Inserting..");
    Ext.getCmp('tsatuanfrm').reset();
    },
    editSatuan: function(){
       id_satuan = Ext.getCmp('id_satuane').getValue();
       nama_satuan = Ext.getCmp('nama_satuane').getValue();
       store = Ext.getStore('lissatuan');
       record = Ext.getCmp('lsatuan').getSelection();
       index = store.indexOf(record);
       record = store.getAt(index);
       store.beginUpdate();
       record.set('id_satuan',id_satuan);
       record.set('nama_satuan',nama_satuan);
       store.endUpdate();
       store.load();
       alert("Updatting..");   
    },
    addKategori: function(){
    nama_kategori = Ext.getCmp('namaka').getValue();
    store = Ext.getStore('liskategori');
    store.beginUpdate();
    store.insert(0, {'nama_kategori': nama_kategori});
    store.endUpdate();
    store.load();
    alert("Inserting..");
    Ext.getCmp('tkategorifrm').reset();
    },
    editKategori: function(){
       id_kategori = Ext.getCmp('id_kategorie').getValue();
       nama_kategori = Ext.getCmp('nama_kategorie').getValue();
       store = Ext.getStore('liskategori');
       record = Ext.getCmp('lkategori').getSelection();
       index = store.indexOf(record);
       record = store.getAt(index);
       store.beginUpdate();
       record.set('id_kategori',id_kategori);
       record.set('nama_kategori',nama_kategori);
       store.endUpdate();
       store.load();
       alert("Updatting..");   
    },

    addBarang: function(){
    id_kategori = Ext.getCmp('namakat').getValue();
    id_satuan = Ext.getCmp('namas').getValue();
    nama_barang = Ext.getCmp('namab').getValue();
    jumlah_barang = Ext.getCmp('jumlahb').getValue();
    store = Ext.getStore('lisbarang');
    store.beginUpdate();
    store.insert(0, {'id_kategori':id_kategori, 'id_satuan':id_satuan, 'nama_barang': nama_barang, 'jumlah_barang':jumlah_barang});
    store.endUpdate();
    store.load();
    Ext.getStore('lisbarang1').load();
    Ext.getStore('lisbarang2').load();
    alert("Inserting..");
    Ext.getCmp('tbarangfrm').reset();
    },
    editBarang: function(){
    id_barang = Ext.getCmp('idbar').getValue();    
    id_kategori = Ext.getCmp('namaekat').getValue();
    id_satuan = Ext.getCmp('namaes').getValue();
    nama_barang = Ext.getCmp('namaeb').getValue();
    jumlah_barang = Ext.getCmp('jumlaheb').getValue();
    store = Ext.getStore('lisbarang');
    record = Ext.getCmp('lbarang').getSelection();
    index = store.indexOf(record);
    record = store.getAt(index);
    store.beginUpdate();
    record.set('id_barang',id_barang);
    record.set('nama_barang',nama_barang);
    record.set('jumlah_barang',jumlah_barang);
    record.set('id_kategori',id_kategori);
    record.set('id_satuan',id_satuan);
    store.endUpdate();
    store.load();
    Ext.getStore('lismasuk').load();
    alert("Updatting..");
    
    },

    addMasuk: function(){
        id_barang = Ext.getCmp('id_barang').getValue();
        nama_barang = Ext.getCmp('namam').getValue();
        jumlah_barang = Ext.getCmp('jumlahm').getValue();
        keterangan = Ext.getCmp('keterangan').getValue();
        id_jurusan = Ext.getCmp('jurusanm').getValue();
        id_pengguna = '1';
        store = Ext.getStore('lismasuk');
        store.beginUpdate();
        store.insert(0, {'id_barang': id_barang , 'nama_barang': nama_barang, 'jumlah_barang_masuk': jumlah_barang, 'keterangan': keterangan, 'id_jurusan': id_jurusan, 'id_pengguna' : id_pengguna});
        store.endUpdate();
        store.load();
        alert("Inserting..");
        Ext.getCmp('tmasukfrm').reset();
        Ext.getStore('lisbarang2').clearFilter();
        Ext.getStore('lisbarang1').load();
        Ext.getStore('lisbarang2').load();
        Ext.getStore('lisbarang').load();
        
        
          
    },
    editMasuk: function(){
        id_barang_masuk = Ext.getCmp('id_brg_masuk').getValue();
        id_barang = Ext.getCmp('id_barangm').getValue();
        jumlah = Ext.getCmp('jumlah_masuk').getValue();
        ket = Ext.getCmp('ket_brgmasuk').getValue();
        jur = Ext.getCmp('nama_jurusan_masuk').getValue();
       store = Ext.getStore('lismasuk');
    record = Ext.getCmp('lmasuk').getSelection();
    index = store.indexOf(record);
    record = store.getAt(index);
    store.beginUpdate();
    record.set('id_brg_masuk',id_barang_masuk);
    record.set('id_barang',id_barang);
    record.set('jumlah_barang_masuk',jumlah);
    record.set('id_jurusan',jur);
    record.set('keterangan',ket);
    store.endUpdate();
    store.load();
    alert("Updatting..");     
    },

    addkeluar: function(){
        id_barang = Ext.getCmp('id_barang1').getValue();
        nama_barang = Ext.getCmp('namak').getValue();
        jumlah_barang = Ext.getCmp('jumlahk').getValue();
        keterangan = Ext.getCmp('keterangan1').getValue();
        id_jurusan = Ext.getCmp('jurusank').getValue();
        id_pengguna = '1';
        store = Ext.getStore('liskeluar');
        store.beginUpdate();
        store.insert(0, {'id_barang': id_barang , 'nama_barang': nama_barang, 'jumlah_barang_keluar': jumlah_barang, 'keterangan': keterangan, 'id_jurusan': id_jurusan, 'id_pengguna' : id_pengguna});
        store.endUpdate();
        store.load();
        alert("Inserting..");
        Ext.getStore('lisbarang1').clearFilter();
        Ext.getStore('lisbarang2').load();
        Ext.getStore('lisbarang1').load();
        Ext.getStore('lisbarang').load();
        
    },
    editKeluar: function(){
    id_barang_keluar = Ext.getCmp('id_brg_keluar').getValue();
    id_barang = Ext.getCmp('id_barangk').getValue();
    jumlah = Ext.getCmp('jumlah_keluar').getValue();
    ket = Ext.getCmp('ket_brgkeluar').getValue();
    jur = Ext.getCmp('nama_jurusan_keluar').getValue();
    store = Ext.getStore('liskeluar');
    record = Ext.getCmp('lkeluar').getSelection();
    index = store.indexOf(record);
    record = store.getAt(index);
    store.beginUpdate();
    record.set('id_brg_keluar',id_barang_keluar);
    record.set('id_barang',id_barang);
    record.set('jumlah_barang_keluar',jumlah);
    record.set('id_jurusan',jur);
    record.set('keterangan',ket);
    store.endUpdate();
    alert("Updatting..");     
    store.load();
    },

    onLoginClick: function() {

        this.getView().destroy();

        // Add the main view to the viewport
        Ext.Viewport.add(Ext.create('Inventori.view.main.Main'));

    }
});
