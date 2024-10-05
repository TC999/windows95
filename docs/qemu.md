# QEMU 使用指南

这里构建的镜像是使用 QEMU 制作的。在本文档中，我将保留相关的使用说明。

磁盘镜像创建

```sh
qemu-img create -f qcow2 win95.qcow2 1G
```

安装
```sh
qemu-system-i386 -netdev user,id=mynet0 -device ne2k_isa,netdev=mynet0 -hda win95.qcow2 -soundhw sb16 -m 128 -cpu pentium -device cirrus-vga,vgamem_mb=64 -fda boot_floppy.img -cdrom Win95_OSR25.iso -boot a -soundhw pcspk
```

运行

使用 `ne2k_isa`
```sh
qemu-system-i386 -netdev user,id=mynet0 -device ne2k_isa,netdev=mynet0 -drive file=win95.img,format=raw,index=0,media=disk -soundhw sb16 -m 128 -cpu pentium -device cirrus-vga,vgamem_mb=16 -soundhw pcspk -cdrom Win95_OSR25.iso 
```

使用 `ne2k_pci`
```sh
qemu-system-i386 -net nic,model=ne2k_pci -net user -drive file=win95_ne2k_pci.img,format=raw,index=0,media=disk -soundhw sb16 -m 128 -cpu pentium -device cirrus-vga,vgamem_mb=16 -soundhw pcspk -cdrom Win95_OSR25.iso --enable-kvm
```
