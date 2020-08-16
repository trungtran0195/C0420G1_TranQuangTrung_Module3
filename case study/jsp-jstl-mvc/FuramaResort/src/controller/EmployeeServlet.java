package controller;

import bo.furamaBOImpl;
import model.customer.Customer;
import model.customer.CustomerType;
import model.employee.Employee;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

@WebServlet(name = "EmployeeServlet", urlPatterns = "/employee")
public class EmployeeServlet extends HttpServlet {
    private bo.furamaBO furamaBO = new furamaBOImpl();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");

        if(action == null){
            action = "";
        }
        switch (action) {
            case "create":
                addNewEmployee(request, response);
                break;
            case "edit":
                EditEmployee(request, response);
                break;
            default:
                listEmployee(request, response);
                break;
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");

        if(action == null){
            action = "";
        }
        switch (action) {
            case "delete":
                DeleteEmployee(request, response);
                break;
            case "searchEmployee":
                SearchEmployee(request,response);
                break;
            case "edit":
                ShowEditEmployee(request, response);
                break;
            default:
                listEmployee(request, response);
                break;
        }
    }


    //create
    private void addNewEmployee(HttpServletRequest request, HttpServletResponse response) {
        Employee employee = new Employee();
        employee.setFullName(request.getParameter("name"));
        employee.setBirthday(request.getParameter("birthday"));
        employee.setIdCard(request.getParameter("idCard"));
        employee.setSalary(Double.parseDouble(request.getParameter("salary")));
        employee.setPhone(request.getParameter("phone"));
        employee.setEmail(request.getParameter("email"));
        employee.setAddress(request.getParameter("address"));
        employee.setPositionId(Integer.parseInt(request.getParameter("PositionId")));
        employee.setEducationDegreeId(Integer.parseInt(request.getParameter("EducationDegreeId")));
        employee.setDivisionId(Integer.parseInt(request.getParameter("DivisionId")));

        this.furamaBO.save(employee);
        RequestDispatcher dispatcher = request.getRequestDispatcher("furama/employee/list.jsp");
        request.getSession().setAttribute("message", "New employee was added");
        try {
            response.sendRedirect("/employee");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //edit
    private void ShowEditEmployee(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        Employee employee = this.furamaBO.findEmployee(id);

        request.setAttribute("employee",employee);

        RequestDispatcher dispatcher = request.getRequestDispatcher("furama/employee/edit.jsp");
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void EditEmployee(HttpServletRequest request, HttpServletResponse response) {
        Employee employee = new Employee();
        employee.setFullName(request.getParameter("name"));
        employee.setBirthday(request.getParameter("birthday"));
        employee.setIdCard(request.getParameter("idCard"));
        employee.setSalary(Double.parseDouble(request.getParameter("salary")));
        employee.setPhone(request.getParameter("phone"));
        employee.setEmail(request.getParameter("email"));
        employee.setAddress(request.getParameter("address"));
        employee.setPositionId(Integer.parseInt(request.getParameter("PositionId")));
        employee.setEducationDegreeId(Integer.parseInt(request.getParameter("EducationDegreeId")));
        employee.setDivisionId(Integer.parseInt(request.getParameter("DivisionId")));
        employee.setId(Integer.parseInt(request.getParameter("EditId")));


        this.furamaBO.update(employee);
        request.getSession().setAttribute("message", "employee was updated");
        try {
            response.sendRedirect("/employee");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //delete
    private void DeleteEmployee(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        this.furamaBO.deleteEmployee(id);

        request.getSession().setAttribute("message", "employee was deleted");
        try {
            response.sendRedirect("/employee");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //search
    private void SearchEmployee(HttpServletRequest request, HttpServletResponse response) {
        String searchName = request.getParameter("searchName");

        ArrayList<Employee> employeesList = this.furamaBO.searchEmployeeByName(searchName);

        request.setAttribute("employeesList",employeesList);

        RequestDispatcher dispatcher = request.getRequestDispatcher("furama/employee/list.jsp");
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //list
    public void listEmployee(HttpServletRequest request, HttpServletResponse response) {

        ArrayList<Employee> employeesList = this.furamaBO.findAll();

        request.setAttribute("employees",employeesList);

        RequestDispatcher dispatcher = request.getRequestDispatcher("furama/employee/list.jsp");
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
