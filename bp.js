var fibos = require('fibos');
var fs = require("fs");
var config = require('./config');
var p2p_peer_address = require('./p2p');
console.notice("start FIBOS for EOS producer node");

var keys = "";

while (true) {
	keys = console.readLine("input the  produce-rname:public-key:private-key! oooo:xxxxx:xxxx\n");
	if (keys) break;
}


var public_key = "";
var private_key = "";
keys = keys.split(":");
producername = keys[0];
public_key = keys[1];
private_key = keys[2];

fibos.config_dir = config.config_dir;
fibos.data_dir = config.data_dir;

var chain_config = {
	"contracts-console": false,
	'chain-state-db-size-mb': config["chain-state-db-size-mb"]
};


console.notice("config_dir:", fibos.config_dir);
console.notice("data_dir:", fibos.data_dir);

fibos.load("http", {
	"http-server-address": "0.0.0.0:7070",
	"access-control-allow-origin": "*",
	"http-validate-host": false,
	"verbose-http-errors": true
});

fibos.load("net", {
	"max-clients": 100,
	"p2p-peer-address": p2p_peer_address,
	"p2p-listen-endpoint": "0.0.0.0:9870"
});

fibos.load("producer", {
	'producer-name': producername,
	// 'enable-stale-production': true,
	// 'max-transaction-time': 3000,
	'private-key': JSON.stringify([public_key, private_key])
});


fibos.load("chain", chain_config);
fibos.load("chain_api");

fibos.pubkey_prefix = "EOS";
fibos.core_symbol = "EOS";
fibos.enableJSContract = false;

fibos.start();