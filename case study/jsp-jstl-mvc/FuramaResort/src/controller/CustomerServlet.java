package controller;

import bo.furamaBOImpl;
import model.customer.Customer;
import model.customer.CustomerType;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

@WebServlet(name = "CustomerServlet", urlPatterns = "/customer")
public class CustomerServlet extends HttpServlet {
    private bo.furamaBO furamaBO = new furamaBOImpl();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");

        if(action == null){
            action = "";
        }
        switch (action) {
            case "create":
                addNewCustomer(request, response);
                break;
            case "edit":
                EditCustomer(request, response);
                break;
            default:
                listCustomers(request, response);
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
                DeleteCustomer(request, response);
                break;
            case "searchCustomer":
                SearchCustomer(request,response);
                break;
            case "edit":
                ShowEditCustomer(request, response);
                break;
            default:
                listCustomers(request, response);
                break;
        }
    }


    //create
    private void addNewCustomer(HttpServletRequest request, HttpServletResponse response) {
        System.out.println(request.getParameter("birthday"));
        Customer customer = new Customer();
        customer.setFullName(request.getParameter("name"));
        String time = request.getParameter("birthday");
        System.out.println(time);
        customer.setBirthday(request.getParameter("birthday"));
        customer.setIdCard(request.getParameter("idCard"));
        customer.setPhone(request.getParameter("phone"));
        customer.setEmail(request.getParameter("email"));
        customer.setAddress(request.getParameter("address"));
        customer.setCustomerTypeId(Integer.parseInt(request.getParameter("typeID")));

        this.furamaBO.save(customer);
        RequestDispatcher dispatcher = request.getRequestDispatcher("furama/customer/list.jsp");
        request.getSession().setAttribute("message", "New customer was added");
        try {
            response.sendRedirect("/customer");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //edit
    private void ShowEditCustomer(HttpServletRequest request, HttpServletResponse response) {
        ArrayList<CustomerType> customerTypesList = this.furamaBO.findAllCustomerType();
        int id = Integer.parseInt(request.getParameter("id"));
        Customer customer = this.furamaBO.findCustomer(id);

        request.setAttribute("customer",customer);
        request.setAttribute("customerTypes",customerTypesList);

        RequestDispatcher dispatcher = request.getRequestDispatcher("furama/customer/edit.jsp");
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void EditCustomer(HttpServletRequest request, HttpServletResponse response) {
        Customer editCustomer = new Customer();
        editCustomer.setCustomerId(Integer.parseInt(request.getParameter("EditId")));
        editCustomer.setFullName(request.getParameter("EditName"));
        editCustomer.setBirthday(request.getParameter("EditBirthday"));
        editCustomer.setIdCard(request.getParameter("EditIdCard"));
        editCustomer.setPhone(request.getParameter("EditPhone"));
        editCustomer.setEmail(request.getParameter("EditEmail"));
        editCustomer.setAddress(request.getParameter("EditAddress"));
        editCustomer.setCustomerTypeId(Integer.parseInt(request.getParameter("EditTypeID")));

        this.furamaBO.update(editCustomer);
        request.getSession().setAttribute("message", "customer was updated");
        try {
            response.sendRedirect("/customer");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //delete
    private void DeleteCustomer(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        this.furamaBO.deleteCustomer(id);

        request.getSession().setAttribute("message", "customer was deleted");
        try {
            response.sendRedirect("/customer");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //search
    private void SearchCustomer(HttpServletRequest request, HttpServletResponse response) {
        String searchName = request.getParameter("searchName");

        ArrayList<Customer> customersList = this.furamaBO.searchCustomerByName(searchName);
        ArrayList<CustomerType> customerTypesList = this.furamaBO.findAllCustomerType();

        request.setAttribute("customers",customersList);
        request.setAttribute("customerTypes",customerTypesList);

        RequestDispatcher dispatcher = request.getRequestDispatcher("furama/customer/list.jsp");
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //list
    public void listCustomers(HttpServletRequest request, HttpServletResponse response) {

        ArrayList<Customer> customersList = this.furamaBO.findAllCustomer();
        ArrayList<CustomerType> customerTypesList = this.furamaBO.findAllCustomerType();

        request.setAttribute("customers",customersList);
        request.setAttribute("customerTypes",customerTypesList);

        RequestDispatcher dispatcher = request.getRequestDispatcher("furama/customer/list.jsp");
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
