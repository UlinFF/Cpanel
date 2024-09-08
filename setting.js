/*
    CREDIST !!!
        > UlinFF [ Base ]
        > UlinFF STORE [ Developer ]

    
WA ME : https://wa.me/6281957426224
TE ME : https://t.me/UlinFFStore
YT ME : https://www.youtube.com/@ulinff
SALURAN WA : https://whatsapp.com/channel/0029VajdWVQ5K3zREiOrHs3I
    

*/
const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'UlinFF STORE' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6281957426224'] // ubah aja pake nomor lu
global.noown = '6281957426224'
global.botname = 'Always UlinFF' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'UlinFF' //Gausah Juga
global.idchannel = ''
global.linkgc = 'https://chat.whatsapp.com/EkKQQ184dis4Z2C2KN8Pz5'
global.gcbuyer = "https://chat.whatsapp.com/EkKQQ184dis4Z2C2KN8Pz5"
global.thumbnail = 'https://telegra.ph/file/37d0f3dc3ec1226d8c20e.jpg'
global.autobio = false // AutoBio
global.autoread = false // ReadChat 
global.Ghost = '`'
global.versibot = 'V 8.0.0'
global.packname = 'UlinFF TEAM'
global.author = 'UlinFF TEAM'
global.skizo = "ALWAYS TEAM"
global.wm = "TEAM UlinFF"
global.gris = "`"
//=================================================//
global.onlypc = false
global.onlygc = false
//=================================================//
//cpanel
global.domain = "https://chat.whatsapp.com/EkKQQ184dis4Z2C2KN8Pz5"
global.apikey = "https://chat.whatsapp.com/EkKQQ184dis4Z2C2KN8Pz5"
global.capikey = "https://chat.whatsapp.com/EkKQQ184dis4Z2C2KN8Pz5"
global.egg = "15"
global.loc = "1"


global.text1 = "ASSALAMUALAIKUM"

//Send Pay
global.dana = "081957426224"
global.ovo = "081957426224"
global.gopay = "081957426224"
global.qris = "Minta Ke UlinFF STORE"

//limit & balance
global.limitawal = 10
global.balanceawal = 10000

global.wlcm = []
global.wlcmm = []

global.delaypushkontak = 5500
global.delayjpm = 5500

// DATABASE GAME
global.family100 = {};
global.suit = {};
global.tictactoe = {};

// CUMAN SIMBOL MENU UBAH AJA SESUKA KALIAN
global.atas = '┏━━━━━━━━━━━━━━━━'
global.tengah = '┣━━━━━━━━━━━━━━━━'
global.bawah = '┗━━━━━━━━━━━━━━━━'
global.garis = '┃'
//mess
global.mess = {
    premium: ('KHUSUS PREMIUM'),
    done: ('DONE?....'),
    owner: ('KHUSUS OWNER'),
    wait: ('SILAHKAN MENUNGGU TERLEBIH DAHULU'),
    group: 'KHUSUS GRUP CHAT!',
    admin: 'KHUSUS ADMIN GRUP!',
    botAdmin: 'BOT HARUS MENJADI ADMIN TERLEBIH DAHULU!',
    linkvalid: 'LINK TAUTAN TIDAK VALID!', 
    error: 'EROR TERJADI KESALAHAN!',
    limit: `LIMIT KAMU SUDAH HABIS!\nKETIK .ʙuʏʟιмιт UNTUK MEMBELI LIMIT`,
    regis: (`KAMU BELUM TERDAFTAR\nSILAHKAN DAFTAR TERLEBIH DAHULU .DAFTAR`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})