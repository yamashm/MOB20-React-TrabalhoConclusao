import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    align-items: center;
    justify-content: flex-start;
    background-color: #303030;
 `;

export const HeaderContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #151515;
    height: 128px;
    width: 100%;
`;

export const AddButton = styled.TouchableOpacity`
   width: 75%;
    height: 48px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
`;

export const AddText = styled.Text`
    font-size: 21px;
    font-weight: bold;
    color: #FFF;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 16
})`
    margin-top: 24px;
    margin-bottom: 24px;
    margin-left: 8px;
    margin-right: 8px;
    width: 85%;
`;

export const DeleteText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #9A9999;
    margin-top: 20px;
`;