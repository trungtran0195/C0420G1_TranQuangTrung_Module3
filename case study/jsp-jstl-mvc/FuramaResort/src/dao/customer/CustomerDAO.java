package dao.customer;

import model.customer.Customer;
import model.customer.CustomerType;

import java.util.ArrayList;

public interface CustomerDAO {
    ArrayList<Customer> findAll();
    ArrayList<CustomerType> findAllCustomerType();
    void save(Customer customer);

}
