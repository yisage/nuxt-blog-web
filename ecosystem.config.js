module.exports = {
  apps: [
    {
      name:'huimiediyu',// 进程名称
      port:'3000',// 启动端口
      script: './.output/server/index.mjs'// 执行文件
      exec_mode: 'cluster',// 开启集群模式，多线程模式
      instances: 'max',// 集群实例数
      autorestart: true // 程序崩溃后自动重启
    }
  ]
}