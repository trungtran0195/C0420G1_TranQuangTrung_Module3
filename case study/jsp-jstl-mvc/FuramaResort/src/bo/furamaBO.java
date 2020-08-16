package bo;

import model.customer.Customer;
import model.customer.CustomerType;
import model.employee.Employee;
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
    void deleteCustomer(int id);
    //service
    void save(Services services);
    ArrayList<Services> findAllService();
    //employee
    ArrayList<Employee> findAll();
    Employee findEmployee(int id);
    void save(Employee employee);
    void update(Employee employee);
    void deleteEmployee(int id);
    ArrayList<Employee> searchEmployeeByName(String name);
}
