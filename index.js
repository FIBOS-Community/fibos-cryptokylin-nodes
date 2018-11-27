var fibos = require('fibos');
var fs = require("fs");

console.notice("start EOS seed nodes");


fibos.config_dir = "./blockData"; 
fibos.data_dir = "./blockData"; 

console.notice("config_dir:", fibos.config_dir);
console.notice("data_dir:", fibos.data_dir);


fibos.load("http", {
	"http-server-address": "0.0.0.0:8870",
	"access-control-allow-origin": "*",
	"http-validate-host": false,
	"verbose-http-errors": true //打开报错
});

fibos.load("net", {
	"p2p-peer-address": [
		"fullnode.eoslaomao.com:443", //us California	Mountain View
		"p2p.libertyblock.io:9800", //Canada  Ontario	Toronto
		"peering.mainnet.eoscanada.com:9876", //us California	Mountain View
		"p2p.bitmars.one:8080", //Japan Tokyo
		"peer.eosio.sg:80", //us California	Mountain View
		"mars.fnp2p.eosbixin.com:443", //Hong Kong 
		"p2p.eossweden.se:9876", //Sweden Vastmanlands lan	Vasteras
		"p2p.eosargentina.io:5222", //us California	Mountain View
		"p2p-mainnet.eosgravity.com:8001", // Singapore
		"eosbp-0.atticlab.net:9876", //Uk raine Kyiv	Kiev
		"as1.eosdac.io:49876", //us North Carolina	Durham
		"node2.liquideos.com:9876", //Israel Tel Aviv	Tel Aviv
		"bp.antpool.com:443", //us Virginia	Herndon
		"api2.eostribe.io:9115", //us  Wyoming	Cheyenne
		"eos-seed.eosdublin.io:9876", //Ireland Dublin	Dublin 
		"p2p.hkeos.com:9876", //Japan Tokyo 
		"peer2.mainnet.helloeos.com.cn:80" //Japan Tokyo
		"peer1.eosphere.io:9876", //Australia New South Wales	Sydney
		"peer2.eosphere.io:9876", //Australia New South Wales	Sydney 
		"peer.ono.chat:9876", //Japan Tokyo
		"mainnet.eosnairobi.io:9876", //us Florida	Miami Beach


		"47.104.235.11:9876", //hangzhou
		"119.236.172.156:9876", //Hong Kong 
		"bp.eos.miami:13975", //us Santa Clara
		"85.214.207.118:9876", //Germany Berlin
		"bp.eosnigeria.io:9876", //us Miami Beach
		"node.eos.lawyer:9876", //us Bristow
		"p2p.eosfuture.io:9876", //uk Wales Cardiff
		"node.eosvenezuela.io:9875", //us New Jersey	Matawan
		"prod.mainnet.eos.cybex.io:9888", //us Arizona Phoenix
		"mainnet.eosbcn.com:2095", //us Arizona	Phoenix
		"api1.eosmetal.io:19877", //us California	Mountain View
		"eos-peer.candy.one:9876", //us Arizona	Phoenix
		"peer.eoswin.info:9876", //japan Tokyo
		"eosnode.motion.one:443", //Australia Sydney
		"p2p.syndicateos.com:9876", //uk London
		"mainnet.eos.foodtoken.io:9876", //Canada Montreal
		"bp.eosmedi.com:9877", //France Paris
		"mainnet.eos.ren:9376", //Singapore
		"mainnet1.eos.ren:9376", //Hong Kong
		"peer.dpos.africa:9876", //South Africa    	Johannesburg
		"peer.main.alohaeos.com:9876", //uk London
		"dc1.eosemerge.io:9876", //Poland  Bytom
		"eno.eosvan.io:19866", //us Arizona	Phoenix
		"173.249.13.77:80", //Germany Bayern	Munich
		"p2p-eos.blckchnd.com:19876", //Germany Gunzenhausen
		"195.43.95.98:9876", //Russian Federation  Novosibirskaya oblast'	Novosibirsk
		"peer2.franceos.fr:19876", //uk London
		"mainnet.eosoasis.io:9876", //china beijing
		"v.rito.su:9876", //Russian Federation Novosibirskaya oblast'	Novosibirsk
		"eosbp.kuna.io:9876", //Uk raine  Kyiv	Kiev
		"node1.bp.eosindex.io:9876", //Germany Berlin
		"eosimpera.com:9876", //Germany Hessen	Frankfurt am Main
		"eoschaintech.net:19876", //Japan Tokyo
		"p2p2.eossweden.eu:9966" //Netherlands Noord-Holland	Amsterdam
		"p2p.eosgermany.online:9876", //Germany Bayern	Gunzenhausen
		"peer.blockgenicbp.com:9876" //us Washington	Redmond
		"p2p.eossocal.io:9999", //us California	San Francisco  
		"103.211.167.110:9876", //china beijing
		"p2p.saltblock.io:19876", //us Washington	Redmond
		"bp.superone.io:57576", //Singapore
		"node1.eoswonders.com:59876", //china Shanghai
		"p2p.eoshenzhen.io:9876", //china Shenzhen
		"mainnet.eoshenzhen.io:8888", //china Shenzhen
		"bp.blockchainlab.me:9091" //Canada Quebec	Beauharnois
	],
	"p2p-listen-endpoint": "0.0.0.0:9870"
});

fibos.load("producer", {
	'enable-stale-production': true,
	'max-transaction-time': 3000
});

fibos.load("chain", {
	"contracts-console": true, //开启内容输出
	//'chain-state-db-size-mb': 8 * 1024,
	// "delete-all-blocks": true, //是否每次
	'genesis-json': 'genesis.json'
});
fibos.load("chain_api");
fibos.pubkey_prefix = "EOS";
fibos.core_symbol = "EOS";
fibos.start();