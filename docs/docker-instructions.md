# 在 Docker 中运行 Windows 95

## 使用主机 X11 Unix 套接字挂载卷显示（仅限 Linux）：

**需求：**
* 运行 X-Server 显示的 Linux 操作系统
* [Docker](http://docker.io)

```sh
docker run -it -v /tmp/.X11-unix:/tmp/.X11-unix -e DISPLAY=unix$DISPLAY --device /dev/snd --name windows95 toolboc/windows95
```

注意：你可能需要在你的系统上运行 `xhost +` 以允许连接到主机上运行的 X 服务器。

## 使用 Xming X11 服务器通过 TCP 套接字显示（Windows 及其他）：

**需求：**
* [Xming](https://sourceforge.net/projects/xming/)
* [Docker](http://docker.io)

1. 启动 Xming X11 服务器
2. 运行以下命令：

```sh
docker run -e DISPLAY=host.docker.internal:0 --name windows95 toolboc/windows95
```

## 使用主机 XQuartz 服务器显示（仅限 MacOS）：
**需求：**
* [XQuartz](https://www.xquartz.org/)
* [Docker](http://docker.io)

1. 启动 XQuartz，转到 `Preferences` -> `Security`，并勾选 `Allow connections from network clients`
2. 重启 XQuartz
3. 在终端中运行
```sh
xhost +
```
4. 运行
```sh
docker run -it -e DISPLAY=host.docker.internal:0 toolboc/windows95
```
