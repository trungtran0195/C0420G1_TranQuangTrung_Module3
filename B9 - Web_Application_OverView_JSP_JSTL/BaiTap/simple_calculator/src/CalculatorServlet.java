import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "CalculatorServlet" , urlPatterns = "/calServletPath")
public class CalculatorServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String a = request.getParameter("num1");
        String b = request.getParameter("num2");
        double num1 = Double.parseDouble(a);
        double num2 = Double.parseDouble(b);
        char operator = request.getParameter("operator").charAt(0);
        try{
            double result = Calculator.calculate(num1, num2, operator);
            request.setAttribute("resultServlet", result);
            request.getRequestDispatcher("final.jsp").forward(request, response);
            response.sendRedirect("final.jsp");
        }catch (Exception ex){
            String massage = "Error: " + ex.getMessage();
            request.setAttribute("resultServlet", massage);
            request.getRequestDispatcher("final.jsp").forward(request, response);
            response.sendRedirect("final.jsp");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}
