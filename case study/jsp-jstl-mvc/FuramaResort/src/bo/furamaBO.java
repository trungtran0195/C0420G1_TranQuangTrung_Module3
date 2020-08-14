package bo;

import model.customer.Customer;
import model.customer.CustomerType;
import model.service.Services;

import java.util.ArrayList;

public interface furamaBO {
    //customer
    ArrayList<Customer> findAllCustomer();
    ArrayList<CustomerType> findAllCustomerType();
    ArrayList<Customer> searchCustomerByName(String name);
    Customer findCustomer(int id);
    void save(Customer customer);
    void update(Customer customer);
    void delete(int id);
    //service
    void save(Services services);
}
