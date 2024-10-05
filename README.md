# Windows 95

这是在 [Electron](https://electronjs.org/) 应用程序中运行的 Windows 95。是的，它是完整的。我很抱歉。

## 下载

<table class="is-fullwidth">
</thead>
<tbody>
</tbody>
  <tr>
    <td>
      <img src="./.github/images/windows.png" width="24"><br />
      Windows
    </td>
    <td>
      <span>32位</span>
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95-3.1.1-setup-ia32.exe"> 
        💿 安装程序
      </a> |
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95-win32-ia32-3.1.1.zip"> 
        📦 独立压缩包
      </a>
      <br />
      <span>64位</span>
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95-3.1.1-setup-x64.exe"> 
        💿 安装程序
      </a> |
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95-win32-x64-3.1.1.zip"> 
        📦 独立压缩包
      </a><br />
      <span>ARM64</span>
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95-3.1.1-setup-arm64.exe"> 
        💿 安装程序
      </a> |
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95-win32-arm64-3.1.1.zip"> 
        📦 独立压缩包
      </a><br />
      <span>
        ❓ 不知道你的芯片类型？点击开始，输入“处理器”获取信息。
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <img src="./.github/images/macos.png" width="24"><br />
      macOS
    </td>
    <td>
      <span>Intel处理器</span>
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95-darwin-x64-3.1.1.zip"> 
        📦 独立压缩包
      </a><br />
      <span>Apple M1处理器</span>
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95-darwin-arm64-3.1.1.zip"> 
        📦 独立压缩包
      </a><br />
      <span>
        ❓ 不知道你的芯片类型？了解更多请访问 <a href="https://support.apple.com/en-us/HT211814">apple.com</a>. 
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <img src="./.github/images/linux.png" width="24"><br />
      Linux
    </td>
    <td>
      <span>64位</span>
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95-3.1.1-1.x86_64.rpm"> 
        💿 rpm
      </a> |
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95_3.1.1_amd64.deb"> 
        💿 deb
      </a><br />
      <span>ARM64</span>
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95-3.1.1-1.arm64.rpm"> 
        💿 rpm
      </a> |
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95_3.1.1_arm64.deb"> 
        💿 deb
      </a><br />
      <span>ARMv7 (armhf)</span>
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95-3.1.1-1.armv7hl.rpm"> 
        💿 rpm
      </a> |
      <a href="https://github.com/felixrieseberg/windows95/releases/download/v3.1.1/windows95_3.1.1_armhf.deb"> 
        💿 deb
      </a>
    </td>
  </tr>
</table>

<hr />

![截图](https://user-images.githubusercontent.com/1426799/44532591-4ceb3680-a6a8-11e8-8c2c-bc29f3bfdef7.png) 

## 它能工作吗？
是的！实际上在 macOS、Windows 和 Linux 上运行得相当好。请记住，这是完全用 JavaScript 编写的，所以请适当调整您的期望。

## 这应该是一个原生应用程序吗？
绝对。

## 它能运行 Doom（或我其他喜欢的游戏）吗？
你可能会更适合使用一个真正的虚拟化应用程序，但简短的答案是是的。[感谢 @DisplacedGamers](https://youtu.be/xDXqmdFxofM) 我建议你在开始 DOS 游戏之前切换到 640x480 @ 256 色的分辨率 - 就像过去的美好时光一样。

## 致谢

99% 的工作是在 [v86](https://github.com/copy/v86/) 上完成的，由 Copy 又名 Fabian Hemmer 及其贡献者完成。

## 贡献

在你能够从源代码运行这个之前，你需要磁盘映像。它不是存储库的一部分，但你可以从打包的发行版中使用 `Show Disk Image` 按钮获取，它确实包括了磁盘映像。你可以在 `Modify C: Drive` 部分找到那个按钮。

将 `images` 文件夹解压缩到 `src` 文件夹中，创建此布局：

```
- /images/windows95.img
- /images/default-state.bin
- /assets/...
- /bios/...
- /docs/...
```

完成这些后，运行 `npm install` 和 `npm start` 来运行你的本地构建。

如果你想调整镜像或创建一个新的，查看 [QEMU 文档](./docs/qemu.md)。

## 其他问题

 * [MS-DOS 似乎卡住了屏幕](./HELP.md#ms-dos-seems-to-brick-the-screen)
 * [Windows 95 陷入了一个糟糕的状态](./HELP.md#windows-95-is-stuck-in-a-bad-state)
 * [我想安装额外的应用程序或游戏](./HELP.md#i-want-to-install-additional-apps-or-games)
 * [在 Docker 中运行](./docs/docker-instructions.md)
 * [在 Kubernetes 和 Gitpod 的在线 VM 中运行](./docs/docker-kubernetes-gitpod.md)

## 许可证

这个项目仅供教育目的。它与微软无关，也未经微软批准。
