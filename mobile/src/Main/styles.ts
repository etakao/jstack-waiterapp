import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background: #FAFAFA;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 32px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const CenteredContainer = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #FFF;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView``;
