import React from 'react';

class Character extends React.Component {
    constructor() {
        super();
        
    }

    render () {
        return (
        <div className='character-card'>
           <div className="character-info">
            <h3>{this.props.item.name}</h3>
            <p>
                <strong>Gender:</strong> {this.props.item.gender}
            </p>
            <p>
                <strong>Birth Year:</strong> {this.props.item.birth_year}
            </p>
            <p>
                <strong>Hair Color:</strong>{' '} {this.props.item.hair_color}
            </p>
            </div>                 
        </div>
        );
    }
}

export default Character;