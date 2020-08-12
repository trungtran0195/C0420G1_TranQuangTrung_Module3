package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class BaseDAO {
    private Connection connection;
    private String jdbcUrl = "jdbc:mysql://localhost:3306/furama_resort";
    private String jdbcUsername = "root";
    private String jdbcPassword = "123456";

    public BaseDAO() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            this.connection = DriverManager.getConnection(jdbcUrl, jdbcUsername, jdbcPassword);
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }

    public Connection getConnection() {
        return connection;
    }
}
