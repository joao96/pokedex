import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    marginHorizontal: 18;
`;

export const Logo = styled.Image`
    position: absolute;
    width: 249.83px;
    height: 249.83px;
    marginLeft: 211.59px;
`;

export const Title = styled.Text`
    fontSize: 30px;
    color: #303943;
    fontFamily: ABeeZee-Italic;
    marginTop: 117px;
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
