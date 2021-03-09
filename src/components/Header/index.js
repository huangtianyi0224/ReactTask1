import React from 'react';
import { HeaderContainer } from './styles';
import Title from './../../styles/elements/title';

class Card extends React.Component {
    render(){
        return(
            <HeaderContainer>
                <Title>The GitHub Cards App</Title>
            </HeaderContainer>
        );
    }
}

export default Card;