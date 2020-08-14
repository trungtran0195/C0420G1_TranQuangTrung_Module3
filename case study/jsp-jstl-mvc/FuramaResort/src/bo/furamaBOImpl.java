package bo;

import dao.customer.CustomerDAO;
import dao.customer.CustomerDAOImpl;
import dao.service.serviceDAO;
import dao.service.serviceDAOImpl;
import model.customer.Customer;
import model.customer.CustomerType;
import model.service.Services;

import java.util.ArrayList;

public class furamaBOImpl implements furamaBO{
    //customer
    private CustomerDAO customerDAO = new CustomerDAOImpl();

    @Override
    public ArrayList<Customer> findAllCustomer() {
        return this.customerDAO.findAll() ;
    }

    @Override
    public ArrayList<CustomerType> findAllCustomerType() {
        return this.customerDAO.findAllCustomerType();
    }

    @Override
    public ArrayList<Customer> searchCustomerByName(String name) {
        return this.customerDAO.searchCustomerByName(name);
    }

    @Override
    public Customer findCustomer(int id) {
        return this.customerDAO.findCustomer(id);
    }

    @Override
    public void save(Customer customer) {
        this.customerDAO.save(customer);
    }

    @Override
    public void update(Customer customer) {
        this.customerDAO.update(customer);
    }

    @Override
    public void delete(int id) {
        this.customerDAO.delete(id);
    }

    //service
    private serviceDAO serviceDAO = new serviceDAOImpl();

    @Override
    public void save(Services services) {
        this.serviceDAO.save(services);
    }
}
