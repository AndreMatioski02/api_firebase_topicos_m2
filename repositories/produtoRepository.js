"use strict"

const { response } = require("express");

const firebase = require("../db");
const firestore = firebase.firestore();
const Produto = require("../models/produto");

class produtoRepository {
    constructor(){}

    async create(data) {
        try{
            let res = await firestore.collection("produtos").doc().set(data);
            return res;
        }catch(error){
            return error.message;
        }
    }

    async update(id, data) {
        try{
            let produto = await firestore.collection("produtos").doc(id);
            let res = await produto.update(data);
            return res;
        }catch(error){
            return error.message;
        }
    }

    async getAll() {
        try{
            let produto = await firestore.collection("produtos");
            let res = await produto.get();
            let produtoArray = [];
            if(res.empty){
                return;
            }else {
                res.forEach(doc => {
                    const produto = new Produto(doc.data());
                    produtoArray.push(produto);
                });
                res = produtoArray;
            }
            return res;
        }catch(error){
            return error.message;
        }
    }

    async getById(id) {
        try{
            let produto = await firestore.collection("produtos").doc(id);
            let res = await produto.get();
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
            return await firestore.collection("produtos").doc(id).delete();
        }catch(error){
            return error.message;
        }
    }
};

module.exports = produtoRepository;