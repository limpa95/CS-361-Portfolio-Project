// Controllers for the Yugioh card Collection

import 'dotenv/config';
import express from 'express';
import * as deck from './yugioh-deck-model.mjs';
import cors from 'cors';

const PORT = process.env.PORT;
const app = express();
app.use(cors({origin: '*'}));
app.options('*', cors({origin: '*'}))

app.use(express.json());  // REST needs JSON MIME type.

app.get('/', (req, res) => {
    res.sendStatus(200)
 }); 

// CREATE controller ******************************************
app.post ('/cards', (req,res) => { 
    deck.createCard(
        req.body.cardName, 
        req.body.level, 
        req.body.attribute,
        req.body.type,
        req.body.typing,
        req.body.atk,
        req.body.def,
        req.body.date
        )
        .then(card => {
            console.log(`"${card.cardName}" was added to the deck.`);
            res.status(201).json(card);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: `"${card.cardName}" was not added to the deck due to client side error.` });
        });
});


// RETRIEVE controller ****************************************************
app.get('/cards', (req, res) => {
    deck.retrieveDeck()
        .then(deck => { 
            if (deck !== null) {
                console.log(`All cards were retrieved from the deck.`);
                res.json(deck);
            } else {
                res.status(404).json({ Error: 'Deck is empty. No cards found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Cards could not be retrieved from the deck due to client side error.' });
        });
});


// RETRIEVE by ID controller
app.get('/cards/:_id', (req, res) => {
    deck.retrieveCardByID(req.params._id)
    .then(card => { 
        if (card !== null) {
            console.log(`"${card.cardName}" was retrieved, based on its ID.`);
            res.json(card);
        } else {
            res.status(404).json({ Error: `"${card.cardName}" is not in the deck.` });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: `"${card.cardName}" could not be retrieved, based on its ID.` });
    });

});


// UPDATE controller ************************************
app.put('/cards/:_id', (req, res) => {
    deck.updateCard(
        req.params._id, 
        req.body.cardName, 
        req.body.level, 
        req.body.attribute,
        req.body.type,
        req.body.typing,
        req.body.atk,
        req.body.def,
        req.body.date
    )
    .then(card => {
        console.log(`"${card.cardName}" was updated.`);
        res.json(card);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: `"${card.cardName}" could not be updated due to client side error.` });
    });
});


// DELETE Controller ******************************
app.delete('/cards/:_id', (req, res) => {
    deck.deleteCardById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} card(s) deleted.`);
                res.status(200).send({ Success: 'Card was deleted.' });
            } else {
                res.status(404).json({ Error: 'There was no card to be deleted.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: `Based on its ID, ${deletedCount} card(s) could not be deleted due to client side error.` });
        });
});

// RETRIEVE by ID controller for Partner's server.
app.get('/cardimg/:_id', (req, res) => {
    deck.retrieveCardByID2(req.params._id)
    .then(card => { 
        if (card !== null) {
            console.log(`"${card.name}" was retrieved, based on its ID.`);
            res.json(card);
        } else {
            res.status(404).json({ Error: `"${card.name}" is not in the database.` });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: `"${card.name}" could not be retrieved, based on its ID.` });
    });

});

//  DELETE all cards in deck.
app.delete('/cards', (req, res) => {
    deck.deleteAll()
    .then(deletedCount => { 
        if (deletedCount > 0) {
            console.log(`All cards were deleted.`);
            res.status(200).send({ Success: 'Cards were deleted.' });
        } else {
            res.status(404).json({ Error: `Could not delete all cards in the database.` });
        }         
     })
    .catch(error => {
        console.log(error);
        res.send({ Error: `Card(s) could not be deleted due to client side error.` });
    });

});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});