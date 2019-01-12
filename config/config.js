module.exports = {
    development: {
        // 打开哪个数据库
        database: 'faith',
        // 用户名
        username: 'root',
        // 密码
        password: 'root',
        // 使用哪个数据库程序(哪种类型的数据库)
        dialect: 'mysql',
        // 地址
        host: 'localhost',
        // 端口
        port: 3306,
        // 连接池
        pool: {
            max: 5, // 最大连接数
            min: 0, // 最小连接数
            acquire: 30000,
            idle: 10000
        }
    },
    test: {
        dialect: "sqlite",
        storage: ":memory:"
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
        use_env_variable: 'DATABASE_URL'
    }
};
