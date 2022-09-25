"use strict"

const { response } = require("express");

const firebase = require("../db");
const firestore = firebase.firestore();
const Quarto = require("../models/quarto");

class quartoRepository {
    constructor(){}

    async create(data) {
        try{
            let res = await firestore.collection("quartos").doc().set(data);
            return res;
        }catch(error){
            return error.message;
        }
    }

    async update(id, data) {
        try{
            let quarto = await firestore.collection("quartos").doc(id);
            let res = await quarto.update(data);
            return res;
        }catch(error){
            return error.message;
        }
    }

    async getAll() {
        try{
            let quarto = await firestore.collection("quartos");
            let res = await quarto.get();
            let quartoArray = [];
            if(res.empty){
                return;
            }else {
                res.forEach(doc => {
                    const quarto = new Quarto(doc.data());
                    quartoArray.push(quarto);
                });
                res = quartoArray;
            }
            return res;
        }catch(error){
            return error.message;
        }
    }

    async getById(id) {
        try{
            let quarto = await firestore.collection("quartos").doc(id);
            let res = await quarto.get();
            if(!res.exists) {
                return;
            }else {
                return res.data();
            }
        }catch(error){
            return error.message;
        }
    }

    async delete(id) {
        try{
            return await firestore.collection("quartos").doc(id).delete();
        }catch(error){
            return error.message;
        }
    }
};

module.exports = quartoRepository;