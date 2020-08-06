package dao;

import model.User;

import java.sql.SQLException;
import java.util.List;

public interface UserDAO {
    public void insertUser(User user) throws SQLException;

    public User selectUser(int id);

    public List<User> selectAllUsers(String order);

    public boolean deleteUser(int id) throws SQLException;

    public boolean updateUser(User user) throws SQLException;

    public User getUserById(int id);

    public void insertUserStore(User user) throws SQLException;

    public void addUserTransaction(User user, int[] permision);

    public void insertUpdateWithoutTransaction();

    public void insertUpdateUseTransaction();

}
