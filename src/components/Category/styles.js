import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const CategoryItem = styled.TouchableOpacity`
  width: 155px;
  height: 60px;
  border-radius: 15px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const CategoryText = styled.Text`
  font-size: 15px;
  marginTop: 10px;
  marginLeft: 7px;
  color: #fff;
`;

export const Logo = styled.Image`
    position: absolute;
    width: 63px;
    height: 63px;
    marginLeft: 90px;
`;
