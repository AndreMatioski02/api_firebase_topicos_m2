'use strict'

const firebase = require('../db');
const firestore = firebase.firestore();
const Animal = require('../models/animal');

class animalRepository {
    constructor() {}

    async create(data) {
        try {
            let res = await firestore.collection('animais').doc().set(data);
            return res;
        } catch(error){
            return error.message
        }
    }

    async update(id, data) { 
        try {                   
            let trainer = await firestore.collection('animais').doc(id);
            let res = await trainer.update(data);
            return res;
        } catch(error){
            return error.message
        }
    }

    async getAll() {
        try {
            let animal = await firestore.collection('animais');
            let res = await animal.get();

            let arrayData;
            arrayData = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

            return arrayData;
        } catch(error){
            return error.message
        }
    }

    async getById(id) {
        try{
            let trainer = await firestore.collection('animais').doc(id);
            let res = await trainer.get();
            return res.data()
        } catch(error){
            return error.message
        }
    }

    async delete(id) {
        try{
            return await firestore.collection('animais').doc(id).delete()
        } catch(error){
            return error.message
        }
    }
}

module.exports = animalRepository