const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        transactions: [
            {
              id: 1,
              value: "R$ 34,90",
              category: "serviços",
              description: "Apple.Com/Bill",
              date: "26/12/2019"
            },
            {
              id: 2,
              value: "R$ 16,81",
              category: "transporte",
              description: "Uber do Brasil Tecnolo",
              date: "25/12/2019"
            },
            {
              id: 3,
              value: "R$ 11,35",
              category: "transporte",
              description: "Uber do Brasil Tecnolo",
              date: "24/12/2019"
            },
            {
              id: 4,
              value: "R$ 20,29",
              category: "casa",
              description: "Cobasi Shopping Contin",
              date: "23/12/2019"
            },
            {
              id: 5,
              value: "R$ 7,32",
              category: "transporte",
              description: "Uber do Brasil Tecnolo",
              date: "21/12/2019"
            },
            {
              id: 6,
              value: "R$ 160,82",
              category: "restaurante",
              description: "Campano Hamburgueria",
              date: "20/12/2019"
            },
            {
              id: 7,
              value: "R$ 9,00",
              category: "transporte",
              description: "Beiramar Park Estac",
              date: "19/12/2019"
            },
            {
              id: 8,
              value: "R$ 3,50",
              category: "restaurante",
              description: "Panificadora Lisboa",
              date: "18/12/2019"
            },
            {
              id: 9,
              value: "R$ 72,63",
              category: "supermercado",
              description: "Enoteca Decanter Flori",
              date: "17/12/2019"
            },
            {
              id: 10,
              value: "R$ 54,80",
              category: "restaurante",
              description: "Rei de Floripa",
              date: "16/12/2019"
            },
            {
              id: 11,
              value: "R$ 71,00",
              category: "restaurante",
              description: "Madero Continente Sc S",
              date: "14/12/2019"
            },
            {
              id: 12,
              value: "R$ 101,04",
              category: "restaurante",
              description: "Outback Bz 35 Floriano",
              date: "12/12/2019"
            },
            {
              id: 13,
              value: "R$ 5,71",
              category: "restaurante",
              description: "Panificadora Vo Zulma",
              date: "11/12/2019"
            },
            {
              id: 14,
              value: "R$ 17,90",
              category: "restaurante",
              description: "Santo Pao",
              date: "10/12/2019"
            },
            {
              id: 15,
              value: "R$ 11,91",
              category: "Fatura paga",
              description: "Uber do Brasil Tecnolo",
              date: "09/12/2019"
            },
            {
              id: 16,
              value: "R$ 29,00",
              category: "transporte",
              description: "Uber do Brasil Tecnolo",
              date: "08/12/2019"
            }
          ]
    });
});

module.exports = router;