import React from 'react';
import Card from './Card';

function Deck({ onImg, cards, onDelete, onEdit }) {
    return (
        <table id="deck">
            <caption>Deck</caption>
            <thead>
                <tr>
                    <th>Display Img</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Typing</th>
                    <th>Attribute</th>
                    <th>Level</th>
                    <th>Atk</th>
                    <th>Def</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {cards.map((card, i) => 
                    <Card 
                        onImg={onImg}
                        card={card} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default Deck;
