import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
    background-color: #303030;
 `;

export const InfoText = styled.Text`
    font-size: 16px;
    color: #9A9999;
    margin-bottom: 32px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.20)'
})`
    background: rgba(0,0,0,0.20);
    width: 75%;
    font-size: 16px;
    color: #FFF;
    margin-bottom: 16px;
    padding: 8px;
    border-radius: 8px;
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #EC135B;
    width: 75%;
    height: 48px;
    border-radius: 8px;
    margin-top: 16px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #FFF;
`;