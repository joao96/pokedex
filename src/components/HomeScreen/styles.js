import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    background: #edeff0;
    flex: 1;
`;

export const TopContainer = styled.View`
    background: #fff;
    borderBottomLeftRadius: 30;
    borderBottomRightRadius: 30;
    paddingBottom: 30;
`;

export const Logo = styled.Image`
    position: absolute;
    width: 200;
    height: 200;
    right: 0;
    top: 0;
`;

export const Title = styled.Text`
    fontSize: 30;
    color: #303943;
    fontFamily: ABeeZee-Italic;
    marginLeft: 26;
    marginTop: 117;
`;

export const SearchBarContainer = styled.View`
    width: 324;
    height: 45;
    display: flex;
    alignItems: center;
    background: #F5F5F5;
    border-radius: 100;
    alignSelf: center;
    marginTop: 40;
`;

export const SearchBarInput = styled.TextInput`
    flex: 1;
`;

export const CategoriesContainer = styled.View`
    marginTop: 40;
    marginHorizontal: 18;
    justifyContent: space-between;
    flexDirection: row;
    flexWrap: wrap;
`;

export const TitleNews = styled.Text`
    fontSize: 20;
    color: #303943;
    fontFamily: ABeeZee-Italic;
    marginLeft: 26;
    marginTop: 40;
`;

export const NewsHeader = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
`;

export const TitleViewAll = styled.Text`
    color: #6C79DB;
    fontSize: 14;
`;

export const ButtonViewAll = styled.TouchableOpacity`
    marginRight: 26;
    marginTop: 40;
`;

export const NewsContainer = styled.View`

`;

export const NewsTitleContainer = styled.View`
    width: 165;
`;

export const NewsBody = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    paddingRight: 20;
    paddingBottom: 20;
    paddingTop: 20;
    paddingLeft: 20;
    width: 100%;
`;

export const NewsTitle = styled.Text`
    font-size: 14;
    fontWeight: bold;
    color: #303943;

`;

export const NewsImage = styled.Image`
    width: 110;
    height: 66;
`;
