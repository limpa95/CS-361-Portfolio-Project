import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Deck from '../components/Deck';
import { Link } from 'react-router-dom';

import { IoMdAdd } from "react-icons/io";

function TutorialPage({ setCard }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [cards, setCards] = useState([]);

    // RETRIEVE the entire list of cards
    const loadDeck = async () => {
        const response = await fetch('https://patricks-backend.onrender.com/cards');
        const cards = await response.json();
        setCards(cards);
    } 
    
    // Make HTTP request to retrieve name of selected card 
    let name = '';
    const onImgCard = async _id => {
        const response = await fetch(`https://patricks-backend.onrender.com/cards/${_id}`);
        if (response.status === 200) {
            const cards = await response.json();
            name = cards.cardName;
            
        } else {
            console.error(`Could not find card with _id = ${_id}, status code = ${response.status}`)
        }
        if (name !== '') {
            await cardImg();
            name = '';
            }
    }
    
    // Make POST request to partner's microservice using card name and receive document id containing img url
    let id = ''
    const cardImg = async () => {
        const response = await fetch('https://c023-73-110-252-150.ngrok-free.app/proxy/findCard', {
            
            method: 'POST',
            body: JSON.stringify({'name': name}),
            headers: {
                "ngrok-skip-browser-warning": "true",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const idResponse = await response.json();
        id = idResponse;
        
        if (id !== '') {
        await showImg();
        id = '';
        }
    }
   
    // Retrieve img url using document id and change url to one that links to high resolution image.
    let url = '';
    const [imgLink, setImgLink] = useState('https://ygopro.org/yugioh-card-maker/res/tcg/ygo/border/Normal.png');
    const showImg = async () => {
        const response = await fetch(`https://patricks-backend.onrender.com/cardimg/${id}`);
        if (response.status === 200) {
            const card = await response.json();
            url = card.imagePath;
            if (url !== '') {
                let i1 = url.indexOf("_");
                let i2 = url.indexOf("/", 48);
                url = url.substring(0, i1) + url.substring(i2);
            }
            setImgLink(url);
            url = '';
            
        } else {
            console.error(`Could not find card with _id = ${id}, status code = ${response.status}`)
        }
    }

    // UPDATE a single card
    const onEditCard = async card => {
        setCard(card);
        redirect("/update");
    }


    // DELETE a single card  
    const onDeleteCard = async _id => {
        const response = await fetch(`https://patricks-backend.onrender.com/cards/${_id}`, { method: 'DELETE'});
        if (response.status === 200) {
            const getResponse = await fetch('https://patricks-backend.onrender.com/cards');
            const cards = await getResponse.json();
            setCards(cards);
        } else {
            console.error(`Could not delete card with _id = ${_id}, status code = ${response.status}`)
        }
    }

    //DELETE all cards in deck
    const deleteAll = async _id => {
        const response = await fetch(`https://patricks-backend.onrender.com/cards`, { method: 'DELETE'});
        if (response.status === 200) {
            const getResponse = await fetch('https://patricks-backend.onrender.com/cards');
            const cards = await getResponse.json();
            setCards(cards);
        } else {
            console.error(`Could not delete all cards, status code = ${response.status}`)
        }
    }

    // LOAD all the cards
    useEffect(() => {
        loadDeck();
    }, []);

    let documents = cards;
    let count = documents.length;
    

    // DISPLAY the cards
    return (
        <>
            <div class ="feature-box-flex">
            <div><h2>Tutorial</h2></div>
            <div class="features-box">
            <b>Features:</b>
            <br />
            * Add , edit, and delete Yu-Gi-Oh! cards.
            <br />
            * See how many cards are in your deck.
            <br />
            * View an image of a card in your deck.
            </div>
            <div class="costs-box">
            <b>Costs:</b>
            <br />
            * There is a slight delay when clicking to display an image of the selected card.
            </div>
            </div>
            <p>Start by clicking the add card link. You can enter information for the Yu-Gi-Oh! card you want to add. To delete, click the x icon in the list of cards in your deck on the right side.
                To delete all the cards, click the delete all cards button.
                If you want to edit your card's information, click the pencil icon next to the delete icon. To display an image of the card, click on the icon under Display Img. Click <Link to="/deckpage">here</Link> to go back to deck builder.</p>
            <Link to="/create"><IoMdAdd /> Add card</Link><div class = "deleteAll"><button type="button" onClick={() => {if (window.confirm("Are you sure you want to delete all cards?")){deleteAll()}}}>Delete all cards</button></div><div class = "count">Number of cards: {count}</div>
            <p><div id = "card-display"><img src = {imgLink} alt="Selected card"/></div></p>
            <Deck 
                onImg={onImgCard}
                cards={cards} 
                onEdit={onEditCard} 
                onDelete={onDeleteCard} 
            />
        </>
    );
}

export default TutorialPage;