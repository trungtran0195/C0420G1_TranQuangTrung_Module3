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

    private static final String SHOW_ALL_CUSTOMER = "select * from khachhang where delete_customer != 1;";
    private static final String SHOW_ALL_CUSTOMER_TYPE = "select * from loaikhach";
    private static final String ADD_CUSTOMER = "";

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
                customer.setBirthday(resultSet.getDate("NgaySinh"));
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
        public void save (Customer customer){

        }
}
