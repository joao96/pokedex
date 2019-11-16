import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  marginHorizontal: 18;
`;

export const LoadingContainer = styled.View`
  justifyContent: center;
  alignItems: center;
  flex: 1;
  marginHorizontal: 18;
`;

export const Logo = styled.Image`
  position: absolute;
  width: 249.83;
  height: 249.83;
  marginLeft: 110;
`;

export const Title = styled.Text`
  fontSize: 30;
  color: #303943;
  fontFamily: ABeeZee-Italic;
  marginTop: 117;
  marginBottom: 42;
`;

export const ListContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})``;
