# 收藏服务器与nginx 常用命令

## nginx

whereis nginx

yum install -y nginx

nginx -v

停止nginx -s stop

重启 nginx -s reload

启动 nginx

配置nginx     vim   nginx.conf

#资源访问失败后定向到index.html
            try_files $uri $uri/ /index.html;


编辑模式   i     退出   esc

：wq  保存退出
q！   不保存退出

### 本机nginx

/opt/homebrew/opt/nginx/bin/nginx -g daemon off;  停止

brew services restart nginx 重启

brew services start nginx开启

cat /opt/homebrew/etc/nginx/nginx.conf 直接修改配置文件

直接找文件/opt/homebrew/etc/nginx/nginx.conf修改内容，然后重启


## 服务器
运行：java -jar test_.jar

停止 ctrl c

服务器自动全程运行jar加命令     nohup

开启输入回显stty echo

删除文件命令 rm -rf 

查看端口进程  lsof -i:9050

关闭线程      kill {pid}    		kill -9  {pid}

传文件到服务器 scp -r 
例：scp -r /Users/renshuaiweidemac/Desktop/wgg root@119.3.145.125:/home/www/wgg

## 一些 shell
echo xxx 显示xxx

echo $SHELL   确认Mac终端类型

Mkdir 创建一个文件夹

Touch 创建一个文件

Ls查看所有文件

Cat 查看内容

rm-rf  删除

echo $`date`

Pwd查看当前路径

查看ssh公钥  cat ~/.ssh/id_rsa.pub

创建ssh公钥 ssh-keygen

 Mac 取消备份限速 sudo sysctl debug.lowpri_throttle_enabled=0