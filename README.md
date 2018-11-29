# fibos-cryptokylin-nodes

	通过备份快速启动 EOS 节点

	默认数据，配置存储位置 ./blockData/data

# 说明
API node:

	http://api-kylin.fibos.testnet.fo:7070/v1/chain/get_info

P2P node:
	
	p2p-kylin.fibos.testnet.fo:9870

# 数据持久化

基于 FIBOS 节点 emitter 监听事件

最佳实践框架 [fibos-tracker](https://github.com/FIBOSIO/fibos-tracker)
	

## 启动说明

说明:
	
	fibos bp.js   //快去启动一个bp节点

	fibos seed.js // 快速启动一个同步节点

## 工具
	
	FIBOS快速安装

		curl -s https://fibos.io/download/installer.sh |sh	



	netstat -aln|grep  '内网ip:9870' | grep -c 'ESTABLISHED'    //find how many people connet you

## fibos
	
快速启动fibos节点: [https://github.com/FIBOS-Community/fibos-nodes](https://github.com/FIBOS-Community/fibos-nodes)
	
官网：[https://fibos.io](https://fibos.io) 
	
开发者社区：[https://dev.fo](https://dev.fo)


## CryptoKylin

[https://github.com/eosstore/cryptokylin-illustrate](https://github.com/eosstore/cryptokylin-illustrate)



