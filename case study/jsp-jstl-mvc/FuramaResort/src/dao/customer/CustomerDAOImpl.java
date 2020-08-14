package dao.customer;

import dao.BaseDAO;
import model.customer.Customer;
import model.customer.CustomerType;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class CustomerDAOImpl implements CustomerDAO {

    private BaseDAO baseDAO = new BaseDAO();

    private static final String SHOW_ALL_CUSTOMER = "select * from khachhang where delete_customer != 1";
    private static final String SHOW_ALL_CUSTOMER_TYPE = "select * from loaikhach";
    private static final String SHOW_CUSTOMER = "select * from khachhang where delete_customer != 1 and IDKhachHang = ?";
    private static final String ADD_CUSTOMER = "INSERT INTO khachhang (IDLoaiKhach, HoTen, NgaySinh, SoCMTND, SDT, Email, DiaChi) VALUES (?, ?, ?, ?, ?, ?, ?)";
    private static final String DELETE_CUSTOMER = "update khachhang set delete_customer = 1 where IDKhachHang = ? ";
    private static final String EDIT_CUSTOMER = "update khachhang set IDLoaiKhach = ?, HoTen = ?, NgaySinh = ?, SoCMTND = ?, SDT = ?, Email = ?, DiaChi = ? where IDKhachHang = ? ";
    private static final String SEARCH_CUSTOMER_BY_NAME = "call search_customer_title(?)";

    @Override
    public ArrayList<Customer> findAll() {
        ArrayList<Customer> customersList = new ArrayList<>();
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(SHOW_ALL_CUSTOMER);

            ResultSet resultSet = preparedStatement.executeQuery();
            Customer customer;
            while (resultSet.next()){
                customer = new Customer();
                customer.setCustomerId(resultSet.getInt("IDKhachHang"));
                customer.setFullName(resultSet.getString("HoTen"));
                customer.setBirthday(resultSet.getString("NgaySinh"));
                customer.setIdCard(resultSet.getString("SoCMTND"));
                customer.setPhone(resultSet.getString("SDT"));
                customer.setEmail(resultSet.getString("Email"));
                customer.setAddress(resultSet.getString("DiaChi"));
                customer.setCustomerTypeId(resultSet.getInt("IDLoaiKhach"));

                customersList.add(customer);
            }
            resultSet.close();


        } catch (SQLException e) {
            e.printStackTrace();
        }
        return customersList;
    }

        @Override
        public ArrayList<CustomerType> findAllCustomerType () {
            ArrayList<CustomerType> customerTypesList = new ArrayList<>();
            try {
                PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(SHOW_ALL_CUSTOMER_TYPE);

                ResultSet resultSet = preparedStatement.executeQuery();
                CustomerType customerType;
                while (resultSet.next()){
                    customerType = new CustomerType();
                    customerType.setCustomer_type_id(resultSet.getInt("IDLoaiKhach"));
                    customerType.setCustomer_type(resultSet.getString("TenLoaiKhach"));
                    customerTypesList.add(customerType);
                }

            }catch (SQLException e) {
                e.printStackTrace();
            }
            return customerTypesList;
        }

    @Override
    public Customer findCustomer(int id) {
        Customer customer = new Customer();

        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(SHOW_CUSTOMER);
            preparedStatement.setInt(1,id);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                customer.setCustomerId(resultSet.getInt("IDKhachHang"));
                customer.setFullName(resultSet.getString("HoTen"));
                customer.setBirthday(resultSet.getString("NgaySinh"));
                customer.setIdCard(resultSet.getString("SoCMTND"));
                customer.setPhone(resultSet.getString("SDT"));
                customer.setEmail(resultSet.getString("Email"));
                customer.setAddress(resultSet.getString("DiaChi"));
                customer.setCustomerTypeId(resultSet.getInt("IDLoaiKhach"));
            }
            resultSet.close();
        }catch (SQLException e) {
                e.printStackTrace();
            }
        return customer;
    }

    @Override
        public void save (Customer customer){
            try {
                PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(ADD_CUSTOMER);
                preparedStatement.setInt(1,customer.getCustomerTypeId());
                preparedStatement.setString(2,customer.getFullName());
                preparedStatement.setString(3,customer.getBirthday());
                preparedStatement.setString(4,customer.getIdCard());
                preparedStatement.setString(5,customer.getPhone());
                preparedStatement.setString(6,customer.getEmail());
                preparedStatement.setString(7,customer.getAddress());


                preparedStatement.executeUpdate();

            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

    @Override
    public void update(Customer customer) {
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(EDIT_CUSTOMER);
            preparedStatement.setInt(1,customer.getCustomerTypeId());
            preparedStatement.setString(2,customer.getFullName());
            preparedStatement.setString(3,customer.getBirthday());
            preparedStatement.setString(4,customer.getIdCard());
            preparedStatement.setString(5,customer.getPhone());
            preparedStatement.setString(6,customer.getEmail());
            preparedStatement.setString(7,customer.getAddress());
            preparedStatement.setInt(8,customer.getCustomerId());

            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(int id) {
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(DELETE_CUSTOMER);
            preparedStatement.setInt(1,id);

            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public ArrayList<Customer> searchCustomerByName(String name) {
        ArrayList<Customer> customersList = new ArrayList<>();
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(SEARCH_CUSTOMER_BY_NAME);
            preparedStatement.setString(1,name);

            ResultSet resultSet = preparedStatement.executeQuery();
            Customer customer;
            while (resultSet.next()){
                customer = new Customer();
                customer.setCustomerId(resultSet.getInt("IDKhachHang"));
                customer.setFullName(resultSet.getString("HoTen"));
                customer.setBirthday(resultSet.getString("NgaySinh"));
                customer.setIdCard(resultSet.getString("SoCMTND"));
                customer.setPhone(resultSet.getString("SDT"));
                customer.setEmail(resultSet.getString("Email"));
                customer.setAddress(resultSet.getString("DiaChi"));
                customer.setCustomerTypeId(resultSet.getInt("IDLoaiKhach"));

                customersList.add(customer);
            }
            resultSet.close();


        } catch (SQLException e) {
            e.printStackTrace();
        }
        return customersList;
    }
}
