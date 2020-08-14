package dao.customer;

import model.customer.Customer;
import model.customer.CustomerType;

import java.util.ArrayList;

public interface CustomerDAO {
    ArrayList<Customer> findAll();
    ArrayList<CustomerType> findAllCustomerType();
    Customer findCustomer(int id);
    void save(Customer customer);
    void update(Customer customer);
    void delete(int id);
    ArrayList<Customer> searchCustomerByName(String name);
}
