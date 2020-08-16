package dao.employee;

import dao.BaseDAO;
import model.employee.Employee;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class employeeDAOImpl implements employeeDAO{

    private BaseDAO baseDAO = new BaseDAO();

    private static final String SHOW_ALL_EMPLOYEE = "SELECT IDNhanVien,HoTen,vt.IDViTri,td.IDTrinhDo,bp.IDBoPhan,NgaySinh,SoCMTND,Luong,SDT,Email,DiaChi,TrinhDo,TenViTri,TenBoPhan FROM nhanvien nv\n" +
            "left join bophan bp on nv.IDBoPhan = bp.IDBoPhan\n" +
            "left join vitri vt on nv.IDViTri = vt.IDViTri \n" +
            "left join trinhdo td on nv.IDTrinhDo = td.IDTrinhDo\n" +
            "where nv.delete_nhanvien != 1";
    private static final String SHOW_EMPLOYEE = "SELECT IDNhanVien,HoTen,nv.IDViTri,nv.IDTrinhDo,nv.IDBoPhan,NgaySinh,SoCMTND,Luong,SDT,Email,DiaChi,TrinhDo,TenViTri,TenBoPhan FROM nhanvien nv\n" +
            "inner join bophan bp on nv.IDBoPhan = bp.IDBoPhan\n" +
            "inner join vitri vt on nv.IDViTri = vt.IDViTri \n" +
            "inner join trinhdo td on nv.IDTrinhDo = td.IDTrinhDo\n" +
            "where nv.delete_nhanvien != 1 and nv.IDNhanVien = ?";
    private static final String ADD_EMPLOYEE = "INSERT INTO nhanvien (HoTen, IDViTri, IDTrinhDo, IDBoPhan, NgaySinh, SoCMTND, Luong, SDT, Email, DiaChi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    private static final String DELETE_EMPLOYEE = "update nhanvien set delete_nhanvien = 1 where IDNhanVien = ? ";
    private static final String EDIT_EMPLOYEE = "update nhanvien set HoTen = ?, IDViTri = ?, IDTrinhDo= ?, IDBoPhan = ?, NgaySinh = ?, SoCMTND = ?, Luong = ?, SDT = ?, Email = ?, DiaChi = ? where IDNhanVien = ? ";
    private static final String SEARCH_EMPLOYEE_BY_NAME = "call search_employee_name(?)";

    @Override
    public ArrayList<Employee> findAll() {
        ArrayList<Employee> employeesList = new ArrayList<>();
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(SHOW_ALL_EMPLOYEE);

            ResultSet resultSet = preparedStatement.executeQuery();
            Employee employee;
            while (resultSet.next()){
                employee = new Employee();
                employee.setId(resultSet.getInt("IDNhanVien"));
                employee.setFullName(resultSet.getString("HoTen"));
                employee.setDivisionId(resultSet.getInt("IDBoPhan"));
                employee.setEducationDegreeId(resultSet.getInt("IDTrinhDo"));
                employee.setPositionId(resultSet.getInt("IDViTri"));
                employee.setBirthday(resultSet.getString("NgaySinh"));
                employee.setIdCard(resultSet.getString("SoCMTND"));
                employee.setSalary(resultSet.getDouble("Luong"));
                employee.setPhone(resultSet.getString("SDT"));
                employee.setEmail(resultSet.getString("Email"));
                employee.setAddress(resultSet.getString("DiaChi"));
                employee.setDivision(resultSet.getString("TenBoPhan"));
                employee.setEducationDegree(resultSet.getString("TrinhDo"));
                employee.setPosition(resultSet.getString("TenViTri"));


                employeesList.add(employee);
            }
            resultSet.close();


        } catch (SQLException e) {
            e.printStackTrace();
        }
        return employeesList;
    }

    @Override
    public Employee findEmployee(int id) {
        Employee employee = new Employee();
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(SHOW_EMPLOYEE);
            preparedStatement.setInt(1,id);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                employee.setId(resultSet.getInt("IDNhanVien"));
                employee.setFullName(resultSet.getString("HoTen"));
                employee.setDivisionId(resultSet.getInt("IDBoPhan"));
                employee.setEducationDegreeId(resultSet.getInt("IDTrinhDo"));
                employee.setPositionId(resultSet.getInt("IDViTri"));
                employee.setBirthday(resultSet.getString("NgaySinh"));
                employee.setIdCard(resultSet.getString("SoCMTND"));
                employee.setSalary(resultSet.getDouble("Luong"));
                employee.setPhone(resultSet.getString("SDT"));
                employee.setEmail(resultSet.getString("Email"));
                employee.setAddress(resultSet.getString("DiaChi"));
                employee.setDivision(resultSet.getString("TenBoPhan"));
                employee.setEducationDegree(resultSet.getString("TrinhDo"));
                employee.setPosition(resultSet.getString("TenViTri"));
            }
            resultSet.close();
        }catch (SQLException e) {
            e.printStackTrace();
        }
        return employee;
    }

    @Override
    public void save(Employee employee) {
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(ADD_EMPLOYEE);
            preparedStatement.setString(1,employee.getFullName());
            preparedStatement.setInt(2,employee.getPositionId());
            preparedStatement.setInt(3,employee.getEducationDegreeId());
            preparedStatement.setInt(4,employee.getDivisionId());
            preparedStatement.setString(5,employee.getBirthday());
            preparedStatement.setString(6,employee.getIdCard());
            preparedStatement.setDouble(7,employee.getSalary());
            preparedStatement.setString(8,employee.getPhone());
            preparedStatement.setString(9,employee.getEmail());
            preparedStatement.setString(10,employee.getAddress());


            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void update(Employee employee) {
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(EDIT_EMPLOYEE);
            preparedStatement.setString(1,employee.getFullName());
            preparedStatement.setInt(2,employee.getPositionId());
            preparedStatement.setInt(3,employee.getEducationDegreeId());
            preparedStatement.setInt(4,employee.getDivisionId());
            preparedStatement.setString(5,employee.getBirthday());
            preparedStatement.setString(6,employee.getIdCard());
            preparedStatement.setDouble(7,employee.getSalary());
            preparedStatement.setString(8,employee.getPhone());
            preparedStatement.setString(9,employee.getEmail());
            preparedStatement.setString(10,employee.getAddress());
            preparedStatement.setInt(11,employee.getId());

            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(int id) {
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(DELETE_EMPLOYEE);
            preparedStatement.setInt(1,id);

            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public ArrayList<Employee> searchEmployeeByName(String name) {
        ArrayList<Employee> employeesList = new ArrayList<>();
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(SEARCH_EMPLOYEE_BY_NAME);
            preparedStatement.setString(1,name);

            ResultSet resultSet = preparedStatement.executeQuery();
            Employee employee;
            while (resultSet.next()){
                employee = new Employee();
                employee.setId(resultSet.getInt("IDNhanVien"));
                employee.setFullName(resultSet.getString("HoTen"));
                employee.setDivisionId(resultSet.getInt("IDBoPhan"));
                employee.setEducationDegreeId(resultSet.getInt("IDTrinhDo"));
                employee.setPositionId(resultSet.getInt("IDViTri"));
                employee.setBirthday(resultSet.getString("NgaySinh"));
                employee.setIdCard(resultSet.getString("SoCMTND"));
                employee.setSalary(resultSet.getDouble("Luong"));
                employee.setPhone(resultSet.getString("SDT"));
                employee.setEmail(resultSet.getString("Email"));
                employee.setAddress(resultSet.getString("DiaChi"));
                employee.setDivision(resultSet.getString("TenBoPhan"));
                employee.setEducationDegree(resultSet.getString("TrinhDo"));
                employee.setPosition(resultSet.getString("TenViTri"));


                employeesList.add(employee);
            }
            resultSet.close();


        } catch (SQLException e) {
            e.printStackTrace();
        }
        return employeesList;
    }
}
