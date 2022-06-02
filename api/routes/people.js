var express = require('express');
var router = express.Router();
const db = require("./firebase");
const {getDocs, collection, query, doc, getDoc, addDoc, setDoc,  deleteDoc, updateDoc} = require("firebase/firestore")


router.get("/",  async (req, res) => {
    try{
        let query = await getDocs(collection(db, "users"))
        let response = []
        query.forEach((doc) => {
           response.push({id: doc.id, ...doc.data()})
        })
        return res.status(200).json(response)
    } catch(error){
        console.log(error)
        return res.status(500).json(error);
    }
})

module.exports = router;