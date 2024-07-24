var QueryCounterCoin = "USE dbspacegame\
INSERT INTO Datausers_mainpage (idCoinCounter, amount)\
VALUES ((SELECT idUser FROM users WHERE linkUser = 'link'), ${})\
AS createANDreaplace\
ON DUPLICATE KEY UPDATE\
    amount = createANDreaplace.amount;";

return QueryCounterCoin;