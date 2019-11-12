import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const StatsContainer = styled.View`
  flexWrap: wrap;
`;

export const SingleStat = styled.View`
  flexDirection: row;
  justifyContent: space-around;
  alignItems: center;
  flexWrap: wrap;
  marginBottom: 10;
`;

export const StatsText = styled.Text`
  flex: 1;
  opacity: 0.6;
  fontSize: 14;
`;

export const StatsValue = styled.Text`
  marginRight: 20;
  fontSize: 14;
`;

export const StatsLine = styled.View`
  borderWidth: .15;
  border-radius: 100;
  height: 3;
  position: absolute;
  `;

export const StatsBlankLine = styled.View`
  marginTop: 10;
  borderWidth: .15;
  border-radius: 100;
  width: 200;
  background: #F4F5F4;
  height: 3;
`;

export const InfoText = styled.Text`
  fontSize: 14;
  color: #303943;
  opacity: 0.4;
`;

export const GeneralContainer = styled.View`
`;

export const SectionText = styled.Text`
  marginTop: 30;
  fontSize: 16;
  fontWeight: bold;
  marginBottom: 10;
`;
