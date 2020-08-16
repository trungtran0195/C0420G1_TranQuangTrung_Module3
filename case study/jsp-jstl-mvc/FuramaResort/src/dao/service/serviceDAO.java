package dao.service;

import model.service.Services;

import java.util.ArrayList;

public interface serviceDAO {
    void save(Services services);
    ArrayList<Services> findAllService();
}
