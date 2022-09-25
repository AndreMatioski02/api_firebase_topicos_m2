'use strict'

const firebase = require('../db');
const firestore = firebase.firestore();
const Cliente = require('../models/cliente');

class clienteRepository {
    constructor() {}

    async create(data) {
        try {
            let res = await firestore.collection('clientes').doc().set(data);
            return res;
        } catch(error){
            return error.message
        }
    }

    async update(id, data) { 
        try {                   
            let cliente = await firestore.collection('clientes').doc(id);
            let res = await cliente.update(data);
            return res;
        } catch(error){
            return error.message
        }
    }

    async getAll() {
        try {
            let cliente = await firestore.collection('clientes');
            let res = await cliente.get();

            let arrayData;
            arrayData = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

            return arrayData;
        } catch(error){
            return error.message
        }
    }

    async getById(id) {
        try{
            let cliente = await firestore.collection('clientes').doc(id);
            let res = await cliente.get();
            return res.data()
        } catch(error){
            return error.message
        }
    }

    async delete(id) {
        try{
            return await firestore.collection('clientes').doc(id).delete()
        } catch(error){
            return error.message
        }
    }
}

module.exports = clienteRepository