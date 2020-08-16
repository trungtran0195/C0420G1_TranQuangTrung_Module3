package controller;

import bo.furamaBOImpl;
import model.service.Services;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

@WebServlet(name = "ServiceServlet", urlPatterns = "/services")
public class ServiceServlet extends HttpServlet {
    private bo.furamaBO furamaBO = new furamaBOImpl();


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");

        if(action == null){
            action = "";
        }
        switch (action) {
            case "create":
                addNewService(request, response);
                break;
            default:
                listServices(request, response);
                break;
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");

        if(action == null){
            action = "";
        }
        switch (action) {
            default:
                listServices(request, response);
                break;
        }
    }

    private void listServices(HttpServletRequest request, HttpServletResponse response) {
        ArrayList<Services> servicesList = this.furamaBO.findAllService();

        request.setAttribute("servicesList",servicesList);

        RequestDispatcher dispatcher = request.getRequestDispatcher("furama/service/list.jsp");
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void addNewService(HttpServletRequest request, HttpServletResponse response) {
        Services service = new Services();
        service.setServiceName(request.getParameter("serviceName"));
        service.setAreaUsed(Double.parseDouble(request.getParameter("areaUsed")));
        service.setFloors(Integer.parseInt(request.getParameter("floors")));
        service.setMaxNumberOfPeople(request.getParameter("maxPax"));
        service.setRentalCosts(request.getParameter("rentCost"));
        service.setRentTypeId(Integer.parseInt(request.getParameter("rentTypeId")));
        service.setServiceTypeId(Integer.parseInt(request.getParameter("serviceTypeId")));

        this.furamaBO.save(service);
        RequestDispatcher dispatcher = request.getRequestDispatcher("furama/service/list.jsp");
        request.getSession().setAttribute("message", "New service was added");
        try {
            response.sendRedirect("/services");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
