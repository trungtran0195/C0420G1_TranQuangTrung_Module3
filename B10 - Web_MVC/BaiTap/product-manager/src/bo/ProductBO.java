package bo;

import model.Product;

import java.util.ArrayList;

public interface ProductBO {

    ArrayList<Product> findAll();

    void save(Product product);

    Product findById(int id);

    Product findByName(String productName);

    void update(int id,Product product);

    void delete(int id);
}
