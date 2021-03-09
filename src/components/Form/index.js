import React from 'react';
import api from '../../services/api';
import { InputUsername, FormUsername , Submit } from './styles';

class Form extends React.Component{
    // userNameInput = React.createRef(); > um meio de ler o value no input, com o atributo ref={} no input
    state = {
        userName:'',
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await api.get(`/${this.state.userName}`)
        this.props.onSubmit(response.data);
        this.setState({ userName: '' })
        alert('The user have been registered!')
    };
    
    render(){
        return(
            <FormUsername onSubmit={this.handleSubmit}>
                <InputUsername 
                    type="text" 
                    placeholder="Github username"
                    value={this.state.value}
                    onChange={event => this.setState({ userName: event.target.value })}
                    required
                />
                <Submit>Add card</Submit>
            </FormUsername>
        );
    }
}

export default Form;