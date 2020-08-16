package dao.employee;

import model.employee.Employee;

import java.util.ArrayList;

public interface employeeDAO {
    ArrayList<Employee> findAll();
    Employee findEmployee(int id);
    void save(Employee employee);
    void update(Employee employee);
    void delete(int id);
    ArrayList<Employee> searchEmployeeByName(String name);
}
