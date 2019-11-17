import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const EvolutionContainer = styled.View`
    flex: 1;
    justifyContent: space-between;
    flexDirection: column;
    marginTop: 35;
`;

export const PokemonContainer = styled.View`
    flex: 1;
    justifyContent: center;
    flexDirection: column;
    height: 200;
`;

export const Logo = styled.Image`
    width: 40%;
    height: 110;
    marginHorizontal: 80;
    alignSelf: center;
`;

export const Title = styled.Text`
    fontSize: 16;
    fontWeight: bold;
`;

export const PokemonName = styled.Text`
    fontSize: 14;
    alignSelf: center;
`;

export const Arrow = styled.View`
`;
