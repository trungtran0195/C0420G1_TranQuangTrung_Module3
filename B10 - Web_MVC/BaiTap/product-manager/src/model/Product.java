package model;

public class Product {
    private int id;
    private String productName;
    private Integer productPrice;
    private String productManufacturer;
    private String productDetail;

    public Product() {
    }

    public Product(int id, String productName, Integer productPrice, String productManufacturer, String productDetail) {
        this.id = id;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productManufacturer = productManufacturer;
        this.productDetail = productDetail;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Integer getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Integer productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductManufacturer() {
        return productManufacturer;
    }

    public void setProductManufacturer(String productManufacturer) {
        this.productManufacturer = productManufacturer;
    }

    public String getProductDetail() {
        return productDetail;
    }

    public void setProductDetail(String productDetail) {
        this.productDetail = productDetail;
    }
}
