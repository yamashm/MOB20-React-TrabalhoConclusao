import styled from 'styled-components/native';

export const Background = styled.View`
    flex:1;
    background-color: #303030;
 `;
export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
 `;
export const Logo = styled.Image`
 width:192px;
 height:192px;
 margin-bottom: 32px;
`;

export const InfoTextTitle = styled.Text`
 font-size: 18px;
 font-weight:bold;
 color: #9A9999;
 margin-bottom: 32px;
`;

export const InfoTextBody = styled.Text`
 font-size: 16px;
 font-style: italic;
 color: #9A9999;
 margin-bottom: 32px;
`;

export const ContributorsContainer = styled.KeyboardAvoidingView`
    align-items: flex-start;
    justify-content: center;
 `;

export const ContributorsInfoText = styled.Text`
 font-size: 16px;
 color: #9A9999;
 margin-bottom: 12px;
`;