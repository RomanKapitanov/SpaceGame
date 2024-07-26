export async function DbQuery(counterMainPage) {
    const fs = require('fs');
    const mysql = require('mysql2');

    // Чтение JSON файла
    await fs.readFile('D:\\scripts\\MyProject\\SpaceGame\\Backend\\DbRemote\\DbConfig.json', 'utf-8', (err, data) => {
        if (err) {
            console.error("Ошибка при чтении конфига: ", err);
            return;
        }

        // Парсинг JSON
        const config = JSON.parse(data);

        // Извлечение параметров подключения
        const connectionString = config.ConnectionString.ConnectMySql;
        const params = {};

        // Разделение строки подключения на параметры
        connectionString.split(';').forEach(param => {
            const [key, value] = param.split(':');
            params[key.trim()] = value.trim();
        })

        // Создание подключения к базе данных
        const connection = mysql.createConnection({
            host: params.host,
            user: params.user,
            database: params.database,
            password: params.password
        });
        //Подключение к бд
        connection.connect(function (err) {
            if (err)
                return console.error("Ошибка" + err.message);
            else {
                console.log("Connect success");
            }

            //Запросы к бд
            ///Пример!!!! TODO запросы
            connection.execute("SELECT * FROM users", function (err, results) {
                console.log(results);
            });
            ///

            //Закрыть соединение
            connection.end();
        });
    });
}