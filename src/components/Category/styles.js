import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const CategoryItem = styled.TouchableOpacity`
  width: 155;
  height: 60;
  border-radius: 15;
  margin-left: 10;
  padding-top: 10;
  justify-content: space-between;
`;

export const CategoryText = styled.Text`
  font-size: 15;
  font-weight: bold;
  marginTop: 10;
  marginLeft: 7;
  color: #fff;
`;

export const Logo = styled.Image`
    position: absolute;
    width: 63;
    height: 63;
    marginLeft: 90;
`;
