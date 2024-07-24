var QueryRegistration = "USE dbspacegame\
INSERT INTO users (idUser, nickname)\
VALUES (${}, '${}') AS new_values\
ON DUPLICATE KEY UPDATE\
    nickname = new_values.nickname;";

return QueryRegistration;