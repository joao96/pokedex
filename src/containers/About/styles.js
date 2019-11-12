import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
`;

export const Description = styled.Text`
  fontSize: 14;
`;

export const BodyInfoContainer = styled.View`
  width: 320;
  height: 72;
  marginTop: 28;
  borderRadius: 12;
  flexDirection: row;
  alignItems: center;
  alignContent: center;
  paddingHorizontal: 20;
  flexWrap: wrap;
  shadowColor: rgba(0,0,0, .1);
  backgroundColor: #fff;
  shadowOffset: { height: 3, width: 4 }; 
  shadowOpacity: 1; 
  shadowRadius: 1;
  elevation: 5;
`;

export const Column = styled.View`
    flexDirection: column;
    flex: 1;
`;

export const Row = styled.View`
    flexDirection: row;
    justifyContent: space-between;  
`;

export const InfoText = styled.Text`
  fontSize: 14;
  color: #303943;
  opacity: 0.4;
`;

export const InfoData = styled.Text`
  fontSize: 14;
`;

export const SectionText = styled.Text`
  marginTop: 30;
  fontSize: 16;
  fontWeight: bold;
  marginBottom: 10;
`;

export const GeneralContainer = styled.View`
`;

export const MapInteraction = styled.TouchableHighlight`
`;
