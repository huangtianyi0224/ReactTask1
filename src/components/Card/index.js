import React from 'react';

import { GithubProfile, ProfileImg, ProfileName, ProfileCompany } from './styles';

class Card extends React.Component {
    render(){
        const profile = this.props;
        return(
            <GithubProfile>
                <ProfileImg src={profile.avatar_url} alt="Imagem do Perfil"/>
                <div className="info">
                    <ProfileName>{profile.name}</ProfileName>
                    <ProfileCompany>{profile.company}</ProfileCompany>
                </div>
            </GithubProfile>
        );
    }
}

export default Card;