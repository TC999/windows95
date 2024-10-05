import * as React from "react";

interface CardDriveProps {
  showDiskImage: () => void;
}

interface CardDriveState {}

export class CardDrive extends React.Component<CardDriveProps, CardDriveState> {
  constructor(props: CardDriveProps) {
    super(props);

    this.state = {};
  }

  public render() {
    let advice: JSX.Element | null = null;

    if (process.platform === "win32") {
      advice = this.renderAdviceWindows();
    } else if (process.platform === "darwin") {
      advice = this.renderAdviceMac();
    } else {
      advice = this.renderAdviceLinux();
    }

    return (
      <section>
        <div className="card settings">
          <div className="card-header">
            <h2 className="card-title">
              <img src="../../static/drive.png" />
              挂载 C: 盘
            </h2>
          </div>
          <div className="card-body">
            <p>
              windows95（本应用程序）使用原始磁盘映像。Windows 95（操作系统）
              很脆弱，因此添加或删除文件都有风险。
            </p>
            {advice}
          </div>
        </div>
      </section>
    );
  }

  public renderAdviceWindows(): JSX.Element {
    return (
      <fieldset>
        <legend>在 Windows 上更改磁盘</legend>
        <p>
          Windows 10 无法挂载原始磁盘镜像（具有讽刺意味的是，macOS 和 Linux 可以）。
          然而，存在一些工具可以让你挂载这个驱动器，比如免费工具{" "}
          <a
            target="_blank"
            href="https://www.osforensics.com/tools/mount-disk-images.html"
          >
          OSFMount
          </a>。
          我与它没有关联，所以请自行承担风险使用。
        </p>
        {this.renderMountButton("Windows Explorer")}
      </fieldset>
    );
  }

  public renderAdviceMac(): JSX.Element {
    return (
      <fieldset>
        <legend>在 macOS 上更改磁盘</legend>
        <p>
          macOS 可以直接加载磁盘镜像。点击下面的按钮 磁盘镜像。然后，双击映像以加载它。
        </p>
        {this.renderMountButton("Finder")}
      </fieldset>
    );
  }

  public renderAdviceLinux(): JSX.Element {
    return (
      <fieldset>
        <legend>在 Linux 上更改磁盘</legend>
        <p>
          有许多工具可以让 Linux 用户挂载和修改磁盘镜像。
          windows95 使用的磁盘镜像是一个原始的 "img" 磁盘镜像，
          很可能可以使用已安装在您的机器上的 <code>mount</code> 工具来挂载。
        </p>
        {this.renderMountButton("file viewer")}
      </fieldset>
    );
  }

  public renderMountButton(explorer: string) {
    return (
      <button className="btn" onClick={this.props.showDiskImage}>
        <img src="../../static/show-disk-image.png" />
        <span>在 {explorer} 中显示磁盘文件</span>
      </button>
    );
  }
}
