package controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@WebServlet(name = "FuramaServlet", urlPatterns = "")
public class FuramaServlet extends HttpServlet {
    CustomerServlet customerServlet = new CustomerServlet();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");
        if(action == null){
            action = "";
        }
        switch (action){
            case "customer":
                customerServlet.listCustomers(request,response);
                break;
            default:
                mainsite(request, response);
                break;
        }
    }

    private void mainsite(HttpServletRequest request, HttpServletResponse response) {
        RequestDispatcher dispatcher;
        try {
            dispatcher = request.getRequestDispatcher("furama/index.jsp");
            dispatcher.forward(request, response);
        } catch (IOException | ServletException ioException) {
            ioException.printStackTrace();
        }
    }
}
