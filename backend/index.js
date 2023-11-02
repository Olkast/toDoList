import express from "express"
import cors from "cors"

const app = express()
const port = 7761

const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)
app.use(cors());

const db = {
    list: [
        {id: 1, text: "front", isDone: true},
        {id: 2, text: "back", isDone: false},
        {id: 3, text: "full", isDone: false},
    ]
}


app.get('/list', (req, res) => {
    let foundList = db.list
    res.json(foundList)
})

app.post('/list', (req, res) => {
    if(!req.body.text) {
        res.sendStatus(404)
    }

    const creatList = {
        id: +(new Date()),
        text: req.body.text,
        isDone: false
    }
    db.list.push(creatList)

    res.status(201).json(creatList)
})

app.delete('/list/:id', (req, res) => {
    db.list = db.list.filter(l => l.id !== +req.params.id)

    res.sendStatus(204)
})

app.put('/list/:id', (req, res) => {

    if(!req.body.text) {
        res.sendStatus(400)
        return;
    }

    const foundList = db.list.find(l => l.id === +req.params.id)

    if(!foundList) {
        res.sendStatus(404);
        return;
    }

    foundList.text = req.body.text

    res.sendStatus(204)
})

app.put('/list/done/:id', (req, res) => {

    if(req.body?.isDone !== undefined && req.body?.isDone !== null) {
        const foundList = db.list.find(l => l.id === +req.params.id)

        if(!foundList) {
            res.sendStatus(404);
        }

        foundList.isDone = req.body.isDone
        res.sendStatus(204)
    } else {
        res.sendStatus(404);
    }
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})