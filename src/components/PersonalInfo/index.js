import React from 'react';
import personPlaceholder from '../../assets/img/person-placeholder.jpg';

import { ProfileSection, ImageProfile, InfoProfile, ObjectiveProfile, InfoContact } from './styles';

const PersonalInfo = () => {
	return (
		<ProfileSection>
			<ImageProfile>
				<img src={personPlaceholder} />
				<h1>Denis da Silva Souza</h1>
				<h3>Desenvolvedor Web</h3>
			</ImageProfile>
			<InfoProfile>
				<ObjectiveProfile>
					<h1>Objetivo</h1>
					<span>
						Suprir as expectativas da empresa realizando meu trabalho de forma que contribua para seu
						crescimento.
					</span>
				</ObjectiveProfile>
				<InfoContact>
                    <ul>
                        <li>Estado Civil:</li>
                        <li>Idade:</li>
                        <li>Cidade:</li>
                        <li>Fone:</li>
                        <li>E-mail:</li>
                    </ul>

                    <ul>
                        <li><span>Solteiro</span></li>  
                        <li><span>25</span></li>  
                        <li><span>Palmas - TO</span></li>  
                        <li><span>(63)9 8472-6835 | (63) 9219-3739</span></li>  
                        <li><span>denyssouza1@hotmail.com</span></li>  
                    </ul>
				</InfoContact>
			</InfoProfile>
		</ProfileSection>
	);
};

export default PersonalInfo;
