// Models for the Yugioh card Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
const db = mongoose.createConnection(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'We were unable to connect to Yugioh Deck database. The connection to MongoDB server failed.' });
    } else  {
        console.log('Success: We were able to connect to Yugioh Deck database on the MongoDB server.');
    }
});

// SCHEMA: Define the collection's schema.
const yugiDeckSchema = mongoose.Schema({
	cardName:    { type: String, required: true },
	level:     { type: Number },
	attribute: { type: String, },
    type: { type: String, required: true },
    typing: { type: String, },
    atk: { type: Number, },
    def: { type: Number, },
    date: {type: Date, required: true}
});

// Compile the model from the schema 
// by defining the collection name "cards".
const deck = db.model('cards', yugiDeckSchema);


// CREATE model *****************************************
const createCard = async (cardName, level, attribute, type, typing, atk, def, date) => {
    const card = new deck({ 
        cardName: cardName, 
        level: level, 
        attribute: attribute ,
        type: type,
        typing: typing,
        atk: atk,
        def: def,
        date: date
    });
    return card.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveDeck = async () => {
    const query = deck.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveCardByID = async (_id) => {
    const query = deck.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteCardById = async (_id) => {
    const result = await deck.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateCard = async (_id, cardName, level, attribute, type, typing, atk, def, date) => {
    const result = await deck.replaceOne({_id: _id }, {
        cardName: cardName,
        level: level,
        attribute: attribute,
        type: type,
        typing: typing,
        atk: atk,
        def: def,
        date: date
    });
    return { 
        _id: _id, 
        cardName: cardName,
        level: level,
        attribute: attribute,
        type: type,
        typing: typing,
        atk: atk,
        def: def,
        date: date
    }
}

//DELETE all model *******************************
const deleteAll = async () => {
    const result = await deck.deleteMany({})
    return result.deletedCount
}


// Connect to Partner's MongoDB server hosted locally.

//const conn = mongoose.createConnection(
//    'mongodb://4.tcp.ngrok.io:10787/'
//);

const partnerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    }
}, { timestamps: true});


// Compile the model from the schema 
// by defining the collection name "cards".
const cardModel = db.model('Cardimg', partnerSchema);

// RETRIEVE by ID for Partner's MongoDB
const retrieveCardByID2 = async (_id) => {
    const query = cardModel.findById({_id: _id});
    return query.exec();
}

// EXPORT the variables for use in the controller file.
export { createCard, retrieveDeck, retrieveCardByID, updateCard, deleteCardById, deleteAll, retrieveCardByID2 }