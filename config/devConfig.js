export default {
    // 打开哪个数据库
    database: 'faith',
    // 用户名
    username: 'root',
    // 密码
    password: 'root',
    // 使用哪个数据库程序(哪种类型的数据库)
    dialect: 'mysql' | 'mariadb' | 'sqlite' | 'postgres' | 'mssql',
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
    },
    // 数据表相关的全局配置
    define: {
        // 是否冻结表名
        // 默认情况下，表名会转换为复数形式
        freezeTableName: true,
        // 是否为表添加 createdAt 和 updatedAt 字段
        // createdAt 记录表的创建时间
        // updatedAt 记录字段更新时间
        timestamps: true,
        // 是否为表添加 deletedAt 字段
        // 默认情况下, destroy() 方法会删除数据，
        // 设置 paranoid 为 true 时，将会更新 deletedAt 字段，并不会真实删除数据。
        paranoid: false
    }
}
