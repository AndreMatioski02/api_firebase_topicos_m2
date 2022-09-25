'use strict'

const firebase = require('../db');
const firestore = firebase.firestore();
const Colaborador = require('../models/colaborador');

class colaboradorRepository {
    constructor() {}

    async create(data) {
        try {
            let res = await firestore.collection('colaboradores').doc().set(data);
            return res;
        } catch(error){
            return error.message
        }
    }

    async update(id, data) { 
        try {                   
            let trainer = await firestore.collection('colaboradores').doc(id);
            let res = await trainer.update(data);
            return res;
        } catch(error){
            return error.message
        }
    }

    async getAll() {
        try {
            let colaborador = await firestore.collection('colaboradores');
            let res = await colaborador.get();

            let arrayData;
            arrayData = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

            return arrayData;
        } catch(error){
            return error.message
        }
    }

    async getById(id) {
        try{
            let trainer = await firestore.collection('colaboradores').doc(id);
            let res = await trainer.get();
            return res.data()
        } catch(error){
            return error.message
        }
    }

    async delete(id) {
        try{
            return await firestore.collection('colaboradores').doc(id).delete()
        } catch(error){
            return error.message
        }
    }
}

module.exports = colaboradorRepository