import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const LoadingContainer = styled.View`
  justifyContent: center;
  alignItems: center;
  flex: 1;
  marginHorizontal: 18;
`;

export const Title = styled.Text`
  marginHorizontal: 18;
  fontSize: 30;
  color: #303943;
  fontFamily: ABeeZee-Italic;
  marginTop: 117;
  marginBottom: 42;
`;

export const PokeballLogo = styled.Image`
  marginHorizontal: 18;
  position: absolute;
  width: 249.83;
  height: 249.83;
  alignSelf: flex-end;
`;

export const ListElementContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    marginHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})``;

export const ElementContainer = styled.View`
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

export const ElementName = styled.Text`
  fontSize: 14;
  marginTop: -25;
  fontWeight: bold;
  color: #fff;
  marginBottom: 5;

`;

export const ItemAttr = styled.View`
  width: 43;
  height: 16;
  background: rgba(255, 255, 250, 0.3);
  alignItems: center;
  justifyContent: center;
  borderRadius: 100;
  marginBottom: 5;
`;

export const ItemAttrText = styled.Text`
  fontSize: 8;
  color: #FFFFFF;

`;

export const Logo = styled.Image`
    position: absolute;
    width: 76;
    height: 71;
    marginTop: 30;
    marginLeft: 70;
`;


export const ButtonsContainer = styled.View`
  flexDirection: row;
  justifyContent: space-around;
  alignItems: center;
  alignContent: center;
  marginVertical: 5;
`;

export const InfoText = styled.Text`
  fontSize: 12;
  fontFamily: ABeeZee-Italic;
`;

export const Button = styled.TouchableOpacity`
  alignItems: center;
  justifyContent: center;
  borderWidth: 1;
  paddingHorizontal: 10;
  paddingVertical: 5;
  borderRadius: 15;
  backgroundColor: #ebebeb;
`;

export const Blank = styled.View``;
