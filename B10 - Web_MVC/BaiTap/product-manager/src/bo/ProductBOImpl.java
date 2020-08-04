package bo;

import dao.ProductDAO;
import dao.ProductDAOImpl;
import model.Product;

import java.util.ArrayList;

public class ProductBOImpl implements ProductBO {

    private ProductDAO productDAO = new ProductDAOImpl();

    @Override
    public ArrayList<Product> findAll() {
        return this.productDAO.findAll();
    }

    @Override
    public void save(Product product) {
        productDAO.findAll().add(product);
    }

    @Override
    public Product findById(int id) {
        int i;
        for (i = 0; i < productDAO.findAll().size(); i++) {
            if (productDAO.findAll().get(i).getId() == id) {
                return productDAO.findAll().get(i);
            }
        }
        return null;
    }

    @Override
    public Product findByName(String productName) {
        int i;
        for (i = 0; i < productDAO.findAll().size(); i++) {
            if (productName.equals(productDAO.findAll().get(i).getProductName())) {
                return productDAO.findAll().get(i);
            }
        }
        return null;
    }

    @Override
    public void update(int id, Product product) {
        int i;
        for (i = 0; i < productDAO.findAll().size(); i++) {
            if (productDAO.findAll().get(i).getId() == id) {
                productDAO.findAll().add(i,product);
            }
        }
    }

    @Override
    public void delete(int id) {
        int i;
        for (i = 0; i < productDAO.findAll().size(); i++) {
            if (productDAO.findAll().get(i).getId() == id) {
                productDAO.findAll().remove(i);
            }
        }
    }
}
