import React from 'react';


import Character from './Character';

class CharacterList extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className="character-list">                
              {this.props.characters.map(item => { 
                return (
                    <Character item={item} />
                      );      
              })}
            </div>
          );        
    }
}

export default CharacterList;