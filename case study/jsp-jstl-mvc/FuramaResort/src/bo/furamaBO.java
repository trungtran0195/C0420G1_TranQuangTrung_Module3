package bo;

import model.customer.Customer;
import model.customer.CustomerType;

import java.util.ArrayList;

public interface furamaBO {
    ArrayList<Customer> findAllCustomer();
    ArrayList<CustomerType> findAllCustomerType();
}
