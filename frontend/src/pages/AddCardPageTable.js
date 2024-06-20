import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddCardPageTable = () => {

    const [cardName, setName] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [typing, setTyping] = useState('');
    const [attribute, setAttribute] = useState('');
    const [level, setLevel] = useState('');
    const [atk, setAtk] = useState('');
    const [def, setDef] = useState('');
    
    const redirect = useNavigate();

    const addCard = async () => {
        const newCard = { cardName, type, date, typing, attribute, level, atk, def };
        const response = await fetch('https://patricks-backend.onrender.com/cards', {
            method: 'post',
            body: JSON.stringify(newCard),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Card was successfully added.`);
        } else {
            alert(`Card was unable to be added. Status code = ${response.status}`);
        }
        redirect("/deckpage");
    };


    return (
        <>
        <article>
            <h2>Add a Card</h2>
            <p>Please enter information of the card that you want to add to the deck.</p>
            
            <table id="addDeck">
                <caption>Which card are you adding?</caption>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="name" class="required">Card Name</label>
                        <input
                            type="text"
                            placeholder="Name of card"
                            required
                            value={cardName}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>

                    <td><label for="type" class="required">Type</label>
                        <input
                            type="text"
                            value={type}
                            placeholder="Type of card"
                            required
                            onChange={e => setType(e.target.value)} 
                            id="type" />
                    </td>

                    <td><label for="date" class="required">Date released</label>
                        <input
                            type="date"
                            placeholder="Release date of the card"
                            required
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td><label for="typing">Typing</label>
                        <input
                            type="text"
                            placeholder="Typing of card"
                            value={typing}
                            onChange={e => setTyping(e.target.value)} 
                            id="typing" />
                    </td>

                    <td><label for="attribute">Attribute</label>
                        <input
                            type="text"
                            placeholder="Attribute of card"
                            value={attribute}
                            onChange={e => setAttribute(e.target.value)} 
                            id="attribute" />
                    </td>

                    <td><label for="level">Level</label>
                        <input
                            type="number"
                            placeholder="Enter Lvl"
                            value={level}
                            onChange={e => setLevel(e.target.value)} 
                            id="level" />
                    </td>

                    <td><label for="atk">Atk</label>
                        <input
                            type="number"
                            placeholder="Enter Atk"
                            value={atk}
                            onChange={e => setAtk(e.target.value)} 
                            id="atk" />
                    </td>

                    <td><label for="def">Def</label>
                        <input
                            type="number"
                            placeholder="Enter Def"
                            value={def}
                            onChange={e => setDef(e.target.value)} 
                            id="def" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={addCard}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddCardPageTable;