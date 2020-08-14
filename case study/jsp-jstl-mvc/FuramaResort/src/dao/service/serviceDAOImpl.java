package dao.service;

import dao.BaseDAO;
import model.service.Services;

import java.sql.PreparedStatement;
import java.sql.SQLException;

public class serviceDAOImpl implements serviceDAO{

    private BaseDAO baseDAO = new BaseDAO();

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
}
