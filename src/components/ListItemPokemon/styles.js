import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 48%;
  height: 110;
  borderRadius: 15;
  paddingTop: 42;
  marginBottom: 10;
  justifyContent: space-between;
`;

export const DescriptionContainer = styled.View`
  display: flex;
  flexDirection: column;
  flexWrap: nowrap;
  alignContent: flex-start;
  marginLeft: 15;
`;

export const Logo = styled.Image`
    position: absolute;
    width: 90;
    height: 74;
    marginTop: 25;
    alignSelf: flex-end;
`;

export const PokeballLogo = styled.Image`
    position: absolute;
    alignSelf: flex-end;
    width: 83px;
    height: 83px;
`;

export const Pokeball = styled.Image`
    position: absolute;
    alignSelf: flex-end;
    marginRight: 10; 
    marginTop: 5;
    width: 20;
    height: 20;
`;

export const ItemName = styled.Text`
  fontSize: 14;
  marginTop: -25;
  fontWeight: bold;
  color: #fff;
  marginBottom: 5;

`;

export const ItemType = styled.View`
  width: 43;
  height: 16;
  background: rgba(255, 255, 250, 0.3);
  alignItems: center;
  justifyContent: center;
  borderRadius: 100;
  marginBottom: 5;
`;

export const ItemTypeText = styled.Text`
  fontSize: 8;
  color: #FFFFFF;

`;
