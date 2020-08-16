package dao.service;

import dao.BaseDAO;
import model.service.Services;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class serviceDAOImpl implements serviceDAO{

    private BaseDAO baseDAO = new BaseDAO();

    private static final String FIND_ALL_SERVICE = "SELECT * FROM dichvu";
    private static final String ADD_SERVICE = "INSERT INTO dichvu (TenDichVu, DienTich, SoTang, SoNguoiToiDa, ChiPhiThue, IdKieuThue, IdLoaiDichVu) VALUES (?, ?, ?, ?, ?, ?, ?)";

    @Override
    public void save(Services services) {
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(ADD_SERVICE);
            preparedStatement.setString(1,services.getServiceName());
            preparedStatement.setDouble(2,services.getAreaUsed());
            preparedStatement.setInt(3,services.getFloors());
            preparedStatement.setString(4,services.getMaxNumberOfPeople());
            preparedStatement.setString(5,services.getRentalCosts());
            preparedStatement.setInt(6,services.getRentTypeId());
            preparedStatement.setInt(7,services.getServiceTypeId());


            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public ArrayList<Services> findAllService() {
        ArrayList<Services> servicesList = new ArrayList<>();
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(FIND_ALL_SERVICE);

            ResultSet resultSet = preparedStatement.executeQuery();
            Services services;
            while (resultSet.next()){
                services = new Services();
                services.setId(resultSet.getInt("IDDichVu"));
                services.setServiceName(resultSet.getString("TenDichVu"));
                services.setAreaUsed(resultSet.getDouble("DienTich"));
                services.setFloors(resultSet.getInt("SoTang"));
                services.setMaxNumberOfPeople(resultSet.getString("SoNguoiToiDa"));
                services.setRentalCosts(resultSet.getString("ChiPhiThue"));
                services.setRentTypeId(resultSet.getInt("IdKieuThue"));
                services.setServiceTypeId(resultSet.getInt("IdLoaiDichVu"));

                servicesList.add(services);
            }
            resultSet.close();


        } catch (SQLException e) {
            e.printStackTrace();
        }
        return servicesList;
    }
}
