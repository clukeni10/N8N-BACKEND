import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/send-message', async (req: Request, res: Response): Promise<void> => {
  const { phone, message } = req.body;

  if (!phone || !message) {
    res.status(400).json({
      error: "Campos 'phone' e 'message' são obrigatórios."
    });
    return;
  }

  console.log(`Mensagem recebida: ${message} do número ${phone}`);

  res.json({
    phone: phone,
    message: message,
    resposta: "Hello World",
    
  });
});


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
