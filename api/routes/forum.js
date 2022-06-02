var express = require('express');
var router = express.Router();
const db = require("./firebase");
const {getDocs, collection, doc, getDoc, addDoc, setDoc,  deleteDoc, updateDoc} = require("firebase/firestore")

router.get("/", function(req, res, next) {
    res.send("Forum API is working!");
});

router.get("/post",  async (req, res) => {
    try{
        let query = await getDocs(collection(db, "forum"))
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

router.post('/post', async (req, res) => {
    try{
        console.log(req.body)
        const ref = await addDoc(collection(db, 'forum'),{
            title: req.body.title,
            desc: req.body.desc,
            likes: req.body.likes
        })
        console.log('Document written with id', ref.id)
        return res.status(201).json({post: 'Post successful'})
    } catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
})

router.put('/post', async (req, res) => {
    try{
        console.log(req.body.id)
        const msgRef = doc(db, "forum", req.body.id);

        const update = await updateDoc(msgRef, {likes: req.body.likes} )

        return res.status(200).json({
            likes: 'Likes updated'
        })
    } catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
})


module.exports = router;