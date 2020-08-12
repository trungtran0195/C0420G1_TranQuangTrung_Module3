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

@WebServlet(name = "CustomerServlet")
public class CustomerServlet extends HttpServlet {
    private bo.furamaBO furamaBO = new furamaBOImpl();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

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
