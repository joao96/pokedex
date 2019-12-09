import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const CapturePokemonButton = styled.TouchableOpacity`
    position: absolute;
    alignItems: center;
    justifyContent: center;
    bottom: 10;
    left: 30%;
    right: 30%;
    width: 188;
    height: 36;
    background: #FFFFFF;
    border-radius: 33;
`;


export const CaptureText = styled.Text`
    font-weight: normal;
    color: #000;
    font-size: 14;
`;
