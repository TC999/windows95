import * as React from "react";

export interface CardStartProps {
  startEmulator: () => void;
}

export class CardStart extends React.Component<CardStartProps, {}> {
  public render() {
    return (
      <section id="section-start">
        <button className="btn" id="win95" onClick={this.props.startEmulator}>
          <img src="../../static/run.png" />
          <span>启动 Windows 95</span>
        </button>
        <small>按 ESC 键锁定或解锁鼠标</small>
      </section>
    );
  }
}
