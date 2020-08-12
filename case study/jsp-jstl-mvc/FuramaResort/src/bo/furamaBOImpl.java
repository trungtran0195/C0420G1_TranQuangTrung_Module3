package bo;

import dao.customer.CustomerDAO;
import dao.customer.CustomerDAOImpl;
import model.customer.Customer;
import model.customer.CustomerType;

import java.util.ArrayList;

public class furamaBOImpl implements furamaBO{

    private CustomerDAO customerDAO = new CustomerDAOImpl();

    @Override
    public ArrayList<Customer> findAllCustomer() {
        return this.customerDAO.findAll() ;
    }

    @Override
    public ArrayList<CustomerType> findAllCustomerType() {
        return this.customerDAO.findAllCustomerType();
    }
}
