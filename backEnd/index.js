import express, { response } from 'express'
import admin from 'firebase-admin'
import cors from 'cors';

const app = express()

app.use(cors({
    origin: 'http://127.0.0.1:5500', // Permitir requisições apenas do frontend
}));

app.use(express.json())

admin.initializeApp({
    credential: admin.credential.cert('serviceAccountKey.json')
});
app.post('/cad', async (req, res) => {
    console.log('Dados recebidos:', req.body)
    const { email, password } = req.body
    
    try {
        const userRecord = await admin.auth().createUser({
            email: email,
            password: password
        })

        res.json({ message: 'Usuário criado com sucesso', uid: userRecord.uid })
    } catch (error) {
        console.error('Erro ao criar usuário:', error.message)
        res.status(400).json({ message: 'Erro ao criar usuário: ' + error.message })
    }
});


app.listen(7777, () => {
    console.log('server rodando')
})
