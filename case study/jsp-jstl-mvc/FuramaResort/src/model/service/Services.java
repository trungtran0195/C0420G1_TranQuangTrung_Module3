package model.service;

public class Services {
    private int id;
    private String serviceName;
    private double areaUsed;
    private int floors;
    private String rentalCosts;
    private String maxNumberOfPeople;
    private int rentTypeId;
    private int serviceTypeId;

    public Services() {
    }

    public Services(int id, String serviceName, double areaUsed, int floors, String rentalCosts, String maxNumberOfPeople, int rentTypeId, int serviceTypeId) {
        this.id = id;
        this.serviceName = serviceName;
        this.areaUsed = areaUsed;
        this.floors = floors;
        this.rentalCosts = rentalCosts;
        this.maxNumberOfPeople = maxNumberOfPeople;
        this.rentTypeId = rentTypeId;
        this.serviceTypeId = serviceTypeId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public double getAreaUsed() {
        return areaUsed;
    }

    public void setAreaUsed(double areaUsed) {
        this.areaUsed = areaUsed;
    }

    public int getFloors() {
        return floors;
    }

    public void setFloors(int floors) {
        this.floors = floors;
    }

    public String getRentalCosts() {
        return rentalCosts;
    }

    public void setRentalCosts(String rentalCosts) {
        this.rentalCosts = rentalCosts;
    }

    public String getMaxNumberOfPeople() {
        return maxNumberOfPeople;
    }

    public void setMaxNumberOfPeople(String maxNumberOfPeople) {
        this.maxNumberOfPeople = maxNumberOfPeople;
    }

    public int getRentTypeId() {
        return rentTypeId;
    }

    public void setRentTypeId(int rentTypeId) {
        this.rentTypeId = rentTypeId;
    }

    public int getServiceTypeId() {
        return serviceTypeId;
    }

    public void setServiceTypeId(int serviceTypeId) {
        this.serviceTypeId = serviceTypeId;
    }
}