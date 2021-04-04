import React from 'react';

import {
    Background, Container, Logo, InfoTextTitle, ContributorsContainer, ContributorsInfoText, InfoTextBody
} from './styles';

export default function About() {

    return (
        <Background>
            <Container>
                <Logo source={require('../../assets/logofiap.png')} />
                <InfoTextTitle>MOB20 Trabalho de Conclusão de Módulo</InfoTextTitle>
                <InfoTextBody>Trabalho de conclusão da disciplina Aplicações Cross-Platform com React e React Native do curso MOB20 da pós-graduação FIAP.</InfoTextBody>
                <InfoTextBody>Orientadora: Kelly Joany de Oliveira Santos.</InfoTextBody>
                <ContributorsContainer>
                    <ContributorsInfoText>Grupo: </ContributorsInfoText>
                    <ContributorsInfoText>Bruno Fonseca de Almeida RM 337107</ContributorsInfoText>
                    <ContributorsInfoText>Demétrius Tavares de Tavares e Paula RM 338132</ContributorsInfoText>
                    <ContributorsInfoText>Dorenalto Mangueira Couto RM 338609</ContributorsInfoText>
                    <ContributorsInfoText>Marcelo Toshio Yamashita RM 337940</ContributorsInfoText>
                </ContributorsContainer>
            </Container>
        </Background>
    );

}