import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is serving at http://localhost:${port}`);
});
app.get('/api/jokes',(req, res) => {
    const joke = [
        {
            id: 1,
            title: 'A joke',
            constent: 'This is a joke'

        },
        {
            id: 2,
            title: 'A joke',
            constent: 'This is a second joke'
        },
        {
            id: 3,
            title: 'A joke',
            constent: 'This is a third joke'
        },
        {
            id: 4,
            title: 'A joke',
            constent: 'This is a forth joke'
        },
        {
            id: 5,
            title: 'A joke',
            constent: 'This is a fifth joke'
        },
    ];
    res.send(joke);
});

app.get('/backend',(req,res) => {
  res.send("I am Building Backend App");
});

app.get('/dsa',(req,res)=>{
    res.send("I have to master DSA next");
});

