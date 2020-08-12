package model.customer;

public class CustomerType {
    private int customer_type_id;
    private String customer_type;

    public CustomerType() {
    }

    public CustomerType(int customer_type_id, String customer_type) {
        this.customer_type_id = customer_type_id;
        this.customer_type = customer_type;
    }

    public int getCustomer_type_id() {
        return customer_type_id;
    }

    public void setCustomer_type_id(int customer_type_id) {
        this.customer_type_id = customer_type_id;
    }

    public String getCustomer_type() {
        return customer_type;
    }

    public void setCustomer_type(String customer_type) {
        this.customer_type = customer_type;
    }
}
