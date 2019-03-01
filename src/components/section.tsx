import * as React from "react";

import styled from "../theme";

interface SectionProps {
  className?: string;
}

class Section extends React.Component<SectionProps, {}> {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

const StyledSection = styled(Section)`
  width: 100vw;
  height: 100vh;
  background: #2a2c39;

  display: flex;
  justify-items: center;
  align-items: center;
`;

export default StyledSection;
