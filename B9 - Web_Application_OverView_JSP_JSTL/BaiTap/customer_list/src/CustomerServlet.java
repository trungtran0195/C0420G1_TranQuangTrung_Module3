import model.Customer;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "CustomerServlet", urlPatterns = "/customerListPath")
public class CustomerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Customer> customerList = new ArrayList<>();
        customerList.add(new Customer(1,"Tien","2/2/1992","ha noi","https://5.imimg.com/data5/CJ/TM/VT/SELLER-86539219/orange-fresh-fruit-250x250.png"));
        customerList.add(new Customer(1,"Hien","2/2/1992","ha noi","https://5.imimg.com/data5/CJ/TM/VT/SELLER-86539219/orange-fresh-fruit-250x250.png"));
        customerList.add(new Customer(1,"Bao","2/2/1992","ha noi","https://5.imimg.com/data5/CJ/TM/VT/SELLER-86539219/orange-fresh-fruit-250x250.png"));
        customerList.add(new Customer(1,"Thanh","2/2/1992","ha noi","https://5.imimg.com/data5/CJ/TM/VT/SELLER-86539219/orange-fresh-fruit-250x250.png"));
        request.setAttribute("customerServlet", customerList);
        request.getRequestDispatcher("list.jsp").forward(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
