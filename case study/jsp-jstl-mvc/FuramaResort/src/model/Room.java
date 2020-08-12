package model;

public class Room extends Services {
    private String freeService;

    public Room(String id, String nameService, double areaUsed, double rentalCosts, int maxNumberOfPeople, String typeRent, String freeService) {
        super(id, nameService, areaUsed, rentalCosts, maxNumberOfPeople, typeRent);
        this.freeService = freeService;
    }

    public Room() {
    }

    public String getFreeService() {
        return freeService;
    }

    public void setFreeService(String freeService) {
        this.freeService = freeService;
    }

}
