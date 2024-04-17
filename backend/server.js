import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
app.get('/jokes',(req, res) => {
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
            constent: 'This is a forth  joke'
        },
    ];
    res.send(joke);
});

