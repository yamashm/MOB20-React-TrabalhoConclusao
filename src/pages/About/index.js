import React from 'react';

import {
    Background, Container, Logo, InfoText, ContributorsContainer
} from './styles';

export default function About() {

    return (
        <Background>
            <Container>
                <Logo source={require('../../assets/logofiap.png')} />
                <InfoText>MOB20 Trabalho de Conclusão de Módulo</InfoText>
                <ContributorsContainer>
                    <InfoText>Criado por: </InfoText>
                    <InfoText>Bruno Fonseca de Almeida RM 337107</InfoText>
                    <InfoText>Demétrius Tavares de Tavares e Paula RM 338132</InfoText>
                    <InfoText>Dorenalto Mangueira Couto RM 338609</InfoText>
                    <InfoText>Marcelo Toshio Yamashita RM 337940</InfoText>
                </ContributorsContainer>
            </Container>
        </Background>
    );

}