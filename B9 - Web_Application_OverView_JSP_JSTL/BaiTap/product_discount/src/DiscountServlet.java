import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "DiscountServlet" , urlPatterns = "/display-discount")
public class DiscountServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String productDescription = request.getParameter("description");
        String productPrice = request.getParameter("price");
        String discountRate = request.getParameter("discount");

        double result = Double.parseDouble(productPrice) * Double.parseDouble(discountRate) * 0.1;
        request.setAttribute("resultServlet", result);
        request.getRequestDispatcher("final.jsp").forward(request, response);
        response.sendRedirect("final.jsp");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
