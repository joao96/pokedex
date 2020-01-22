import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Logo = styled.Image`
  marginHorizontal: 18;
  position: absolute;
  width: 249.83;
  height: 249.83;
  alignSelf: flex-end;
`;

export const Title = styled.Text`
  marginHorizontal: 18;
  fontSize: 30;
  color: #303943;
  fontFamily: ABeeZee-Italic;
  marginTop: 117;
  marginBottom: 42;
`;

export const ListContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    marginHorizontal: 18,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})``;

export const NotificationContainer = styled.View`
  flexDirection: row;
  alignItems: center;
  paddingHorizontal: 30;
  paddingVertical: 10;
  justifyContent: space-between;
  background: #FFFFFF;
  border-radius: 100;
  alignSelf: center;
  marginBottom: 30;
`;

export const NotificationText = styled.Text`
  fontSize: 15;
  color: #303943;
  marginRight: 5;
  fontFamily: ABeeZee-Regular;
`;
