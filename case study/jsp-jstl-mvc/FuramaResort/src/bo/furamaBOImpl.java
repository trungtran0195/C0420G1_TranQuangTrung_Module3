package bo;

import dao.customer.CustomerDAO;
import dao.customer.CustomerDAOImpl;
import dao.employee.employeeDAO;
import dao.employee.employeeDAOImpl;
import dao.service.serviceDAO;
import dao.service.serviceDAOImpl;
import model.customer.Customer;
import model.customer.CustomerType;
import model.employee.Employee;
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
    public void deleteCustomer(int id) {
        this.customerDAO.delete(id);
    }

    //service
    private serviceDAO serviceDAO = new serviceDAOImpl();

    @Override
    public void save(Services services) {
        this.serviceDAO.save(services);
    }

    @Override
    public ArrayList<Services> findAllService() {
        return this.serviceDAO.findAllService();
    }

    //employee
    private employeeDAO employeeDAO = new employeeDAOImpl();

    @Override
    public ArrayList<Employee> findAll() {
        return this.employeeDAO.findAll();
    }

    @Override
    public Employee findEmployee(int id) {
        return this.employeeDAO.findEmployee(id);
    }

    @Override
    public void save(Employee employee) {
        this.employeeDAO.save(employee);
    }

    @Override
    public void update(Employee employee) {
        this.employeeDAO.update(employee);
    }

    @Override
    public void deleteEmployee(int id) {
        this.employeeDAO.delete(id);
    }

    @Override
    public ArrayList<Employee> searchEmployeeByName(String name) {
        return this.employeeDAO.searchEmployeeByName(name);
    }
}
