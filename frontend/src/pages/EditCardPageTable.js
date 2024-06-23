import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditCardPageTable = ({ cardToEdit }) => {
 
    const [cardName, setName]       = useState(cardToEdit.cardName);
    const [type, setType]         = useState(cardToEdit.type);
    const [date, setDate] = useState(cardToEdit.date);
    const [typing, setTyping] = useState(cardToEdit.typing);
    const [attribute, setAttribute] = useState(cardToEdit.attribute);
    const [level, setLevel] = useState(cardToEdit.level);
    const [atk, setAtk] = useState(cardToEdit.atk);
    const [def, setDef] = useState(cardToEdit.def);
    
    const redirect = useNavigate();

    const editCard = async () => {
        const response = await fetch(`https://green-link-427300-a0.uc.r.appspot.com/cards/${cardToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                cardName: cardName, 
                type: type, 
                date: date,
                typing: typing,
                attribute: attribute,
                level: level,
                atk: atk,
                def: def
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Card was edited successfully.`);
        } else {
            const errMessage = await response.json();
            alert(`Card was unable to be edited. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/deckpage");
    }

    return (
        <>
        <article>
            <h2>Edit a card</h2>
            <p>Please change information about <strong>{cardName}</strong>.</p>
            <table id="cards">
                <caption>Editing <strong>{cardName}</strong></caption>
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
                            placeholder="Name of the card"
                            required
                            value={cardName}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>

                    <td><label for="type" class="required">Type</label>
                        <input
                            type="text"
                            value={type}
                            placeholder="Type of the card"
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
                            placeholder="Typing the card"
                            value={typing}
                            onChange={e => setTyping(e.target.value)} 
                            id="typing" />
                    </td>

                    <td><label for="attribute">Attribute</label>
                        <input
                            type="text"
                            placeholder="Attribute of the card"
                            value={attribute}
                            onChange={e => setAttribute(e.target.value)} 
                            id="attribute" />
                    </td>

                    <td><label for="level">Level</label>
                        <input
                            type="number"
                            placeholder="Level of the card"
                            value={level}
                            onChange={e => setLevel(e.target.value)} 
                            id="level" />
                    </td>

                    <td><label for="atk">Atk</label>
                        <input
                            type="number"
                            placeholder="Atk of the Card"
                            value={atk}
                            onChange={e => setAtk(e.target.value)} 
                            id="atk" />
                    </td>

                    <td><label for="def">Def</label>
                        <input
                            type="number"
                            placeholder="Def of the card"
                            value={def}
                            onChange={e => setDef(e.target.value)} 
                            id="def" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={editCard}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditCardPageTable;