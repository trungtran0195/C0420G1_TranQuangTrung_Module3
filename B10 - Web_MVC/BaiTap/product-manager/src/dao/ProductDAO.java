package dao;

import model.Product;

import java.util.ArrayList;

public interface ProductDAO {
    ArrayList<Product> findAll();
}
