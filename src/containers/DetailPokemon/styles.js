import styled from 'styled-components/native';


export const Container = styled.ScrollView`
  flex: 1;
`;

export const LoadingContainer = styled.View`
  justifyContent: center;
  alignItems: center;
  flex: 1;
  marginHorizontal: 18;
`;

export const DataContainer = styled.View`
  marginHorizontal: 33;
  marginTop: 110;
`;

export const NameSequenceContainer = styled.View`
  marginTop: 10;
  flexDirection: row;
  justifyContent: space-between;
`;

export const Name = styled.Text`
    fontSize: 36;
    color: #ffffff;
    fontFamily: ABeeZee-Italic;
    marginBottom: 10;
`;

export const SequenceNumber = styled.Text`
    fontSize: 18;
    color: #ffffff;
    marginBottom: 10;
    fontFamily: ABeeZee-Italic;
`;

export const TypeContainer = styled.View`
  flexDirection: row;
  justifyContent: flex-start;
`;

export const Type = styled.View`
  width: 70;
  height: 25;
  background: rgba(255, 255, 250, 0.3);
  alignItems: center;
  justifyContent: center;
  borderRadius: 100;
  marginLeft: 5;
`;

export const TypeText = styled.Text`
  fontSize: 12;
  color: #FFFFFF;

`;

export const Logo = styled.Image`
    position: absolute;
    width: 200;
    height: 200;
    marginTop: 220;
    marginHorizontal: 80;
`;

export const PokeBallLogo = styled.Image`
    position: absolute;
    width: 200;
    height: 220;
    right: -5;
    top: 0;
`;

export const DottedLogo = styled.Image`
  position: absolute;
  width: 57;
  height: 31;
  left: 190;
  top: 4;
  opacity: 0.5;
`;

export const InfoContainer = styled.View`
  background: #fff;
  borderTopLeftRadius: 30;
  borderTopRightRadius: 30;
  flex: 1;
  marginTop: 230;
  paddingHorizontal: 28;
  paddingBottom: 15;
`;

export const TabContainer = styled.View`
  marginTop: 46;
  flexDirection: row;
  justifyContent: space-between;
  marginBottom: 25;
  borderBottomWidth: .25;
`;

export const Tab = styled.TouchableOpacity`
`;

export const TabText = styled.Text`
  borderBottomColor: #6C79DB;
  paddingBottom: 14;
  fontSize: 14;
`;
