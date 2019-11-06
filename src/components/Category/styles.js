import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const CategoryItem = styled.TouchableOpacity`
  width: 155;
  height: 60;
  borderRadius: 15;
  paddingTop: 10;
  justifyContent: space-between;
  shadowColor: rgba(0,0,0, .4); 
  shadowOffset: { height: 1, width: 1 }; 
  shadowOpacity: 1; 
  shadowRadius: 1;
  marginBottom: 12;
  elevation: 10;
`;

export const CategoryText = styled.Text`
  fontSize: 15;
  fontWeight: bold;
  marginTop: 10;
  marginLeft: 7;
  color: #fff;
`;

export const Logo = styled.Image`
    position: absolute;
    width: 63;
    height: 60;
    marginLeft: 91;
`;
