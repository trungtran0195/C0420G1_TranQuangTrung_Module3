package dao;

import model.Product;

import java.util.ArrayList;
import java.util.List;

public class ProductDAOImpl implements ProductDAO {

    private static ArrayList<Product> productList;

    static{
        productList = new ArrayList<>();
        productList.add(new Product(1, "Iphone 8", 10000000,"Apple", "China"));
        productList.add(new Product(2, "Iphone X", 15000000,"Apple", "China"));
        productList.add(new Product(3, "Note 12", 15000000,"Samsung", "VietNam"));
        productList.add(new Product(4, "Galaxy S12", 10000000,"Samsung", "VietNam"));
    }

    @Override
    public ArrayList<Product> findAll() {

        return new ArrayList<Product>(productList);
    }
}
