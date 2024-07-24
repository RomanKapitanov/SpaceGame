const fs = require('fs');
const mysql = require('mysql2');

// Чтение JSON файла
fs.readFile('config.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка при чтении файла:', err);
        return;
    }

    // Парсинг JSON
    const config = JSON.parse(data);
    
    // Извлечение параметров подключения
    const connectionString = config.ConnectionString.ConnectMySql;
    const params = {};
    
    // Разделение строки подключения на параметры
    connectionString.split(', ').forEach(param => {
        const [key, value] = param.split(': ');
        params[key.trim()] = value.trim();
    });

    // Создание подключения к базе данных
    const connection = mysql.createConnection({
        host: params.host,
        user: params.user,
        password: params.password,
        database: params.database
    });

    // Подключение к базе данных
    connection.connect(err => {
        if (err) {
            console.error('Ошибка подключения к БД:', err);
            return;
        }
        console.log('Успешное подключение к БД');
        
        // Здесь вы можете выполнять запросы к базе данных

        // Закрытие соединения
        connection.end();
    });
});
// "test": "echo \"Error: no test specified\" && exit 1"