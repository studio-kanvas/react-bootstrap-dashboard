import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import MobileSider from './MobileSider';
import hamburgerIcon from '../../../assets/icons/hamburger.svg';
import styled from 'styled-components';
import { LayoutProps } from '../interfaces';

const { Header, Content } = Layout;

const MobileLayout: React.FC<LayoutProps> = ({ children, siderContent }) => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);
  const icon = <img src={hamburgerIcon} alt="Toggle Sider" />;

  return (
    <LayoutStyled>
      <MobileSider collapsed={siderCollapsed} toggleSider={toggleSider} siderCollapsed={siderCollapsed}>
        {siderContent}
      </MobileSider>
      <Layout>
        <Header>
          <Button type="text" icon={icon} onClick={toggleSider} />
        </Header>
        <Content>{children}</Content>
      </Layout>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Layout)`
  height: 100vh;
`;

export default MobileLayout;
