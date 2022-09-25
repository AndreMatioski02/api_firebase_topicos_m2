"use strict"

const { response } = require("express");

const firebase = require("../db");
const firestore = firebase.firestore();
const Servico = require("../models/servico");

class servicoRepository {
    constructor(){}

    async create(data) {
        try{
            let res = await firestore.collection("servicos").doc().set(data);
            return res;
        }catch(error){
            return error.message;
        }
    }

    async update(id, data) {
        try{
            let servico = await firestore.collection("servicos").doc(id);
            let res = await servico.update(data);
            return res;
        }catch(error){
            return error.message;
        }
    }

    async getAll() {
        try{
            let servico = await firestore.collection("servicos");
            let res = await servico.get();
            let servicoArray = [];
            if(res.empty){
                return;
            }else {
                res.forEach(doc => {
                    const servico = new Servico(doc.data());
                    servicoArray.push(servico);
                });
                res = servicoArray;
            }
            return res;
        }catch(error){
            return error.message;
        }
    }

    async getById(id) {
        try{
            let servico = await firestore.collection("servicos").doc(id);
            let res = await servico.get();
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
            return await firestore.collection("servicos").doc(id).delete();
        }catch(error){
            return error.message;
        }
    }
};

module.exports = servicoRepository;