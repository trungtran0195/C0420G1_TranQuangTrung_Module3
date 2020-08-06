package dao;

import model.User;

import java.sql.SQLException;
import java.util.List;

public interface UserDAO {
    public void insertUser(User user) throws SQLException;

    public User selectUser(int id);

    public List<User> selectAllUsersProcedure(String order);

    public List<User> selectAllUsers(String order);

    public boolean deleteUser(int id) throws SQLException;

    public boolean updateUser(User user) throws SQLException;

    public boolean updateUserProcedure(User user) throws SQLException;

    public boolean deleteUserProcedure(int id) throws SQLException;
}
