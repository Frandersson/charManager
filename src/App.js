import React, {Component} from 'react';
import Table from './Table.js';
import Form from './Form.js';

class App extends Component {

    state = {
        characters: []
    };
    render() {
        return (
            <div className = "container">
                <Table 
                    characterData = {this.state.characters}
                    removeCharacter = {this.removeCharacter}
                />
                <Form 
                    handleSubmit = {this.handleSubmit}    
                />
            </div>  
        );
    }

    removeCharacter = (index) => {
    
        this.setState({
            characters: this.state.characters.filter((char, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = (character) => {
        let newArr = this.state.characters;
        newArr.push(character);

        this.setState({characters: newArr});
    }
}

export default App;