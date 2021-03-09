import React from 'react';
import Card from './../Card/index';

import { CardListContainer } from './styles';

class CardList extends React.Component{
    render(){
        return(
            <CardListContainer>
                {this.props.profiles.map(profile => <Card key={profile.id} { ...profile} />)}
            </CardListContainer>
        );
    }
};

// [ <Card />, <Card />, <Card /> ]
// [React.createElement(), React.createElement(), React.createElement()];

export default CardList;