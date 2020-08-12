package dao;

import model.Note;
import model.NoteType;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class NoteDAOImpl implements NoteDAO{

    private BaseDAO baseDAO = new BaseDAO();
//    private static final String SHOW_ALL_NOTE = "select note_id,title, content, note_type.type_id,`name` from note \n" +
//            "inner join note_type on note.type_id = note_type.type_id order by note_id limit " + "?" + "," + "? ;";
    private static final String SHOW_ALL_NOTE = "select note_id,title, content, note_type.type_id,`name` from note \n" +
        "inner join note_type on note.type_id = note_type.type_id where delete_note != 1 order by note_id";
    private static final String SELECT_ALL_NOTE_TYPE = "SELECT `type_id`,`name` FROM note_type order by `name`";
    private static final String ADD_NOTE = "insert into note (title, content, type_id, delete_note) value ( ? , ? , ? , 0)";
    private static final String UPDATE_NOTE = "update note set title = ?, content = ? , type_id = ? where note_id = ? ";
    private static final String DELETE_NOTE = "call delete_note(?);";
    private static final String SELECT_NOTE_BY_ID = "call select_note(?)";
    private static final String SELECT_NOTE_BY_TITLE = "call search_note_title(?)";
    private static final String SELECT_NOTE_BY_TYPE = "call select_note_by_type(?)";
//    private static final String SHOW_NUMBER_OF_PAGE = "call paged_list(?,?)";
//    private int noOfRecords;



    @Override
    public ArrayList<Note> findAll() {
        ArrayList<Note> noteList = new ArrayList<>();

            try {
                PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(SHOW_ALL_NOTE);
//            preparedStatement.setInt(1,offset);
//            preparedStatement.setInt(2,noOfRecords);

            ResultSet resultSet = preparedStatement.executeQuery();

            Note note = null;

            while (resultSet.next()){
                note = new Note();

                note.setId(resultSet.getInt("note_id"));
                note.setTitle(resultSet.getString("title"));
                note.setContent(resultSet.getString("content"));
                note.setType(resultSet.getString("name"));

                noteList.add(note);
            }
            resultSet.close();

//            preparedStatement = this.baseDAO.getConnection().prepareStatement(SHOW_NUMBER_OF_PAGE);
//            preparedStatement.setInt(1,offset);
//            preparedStatement.setInt(2,noOfRecords);
//            resultSet = preparedStatement.executeQuery();
//            if(resultSet.next())
//                this.noOfRecords = resultSet.getInt(1);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        return noteList;
    }

//    public int getNoOfRecords() {
//        return noOfRecords;
//    }

    @Override
    public ArrayList<NoteType> findAllNoteType() {
        ArrayList<NoteType> noteTypeList = new ArrayList<>();

        try {
            PreparedStatement preparedStatement =
                    this.baseDAO.getConnection().prepareStatement(SELECT_ALL_NOTE_TYPE);

            ResultSet resultSet = preparedStatement.executeQuery();

            NoteType noteType = null;

            while (resultSet.next()){
                noteType = new NoteType();


                noteType.setTypeId(resultSet.getInt("type_id"));
                noteType.setType(resultSet.getString("name"));

                noteTypeList.add(noteType);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return noteTypeList;
    }

    @Override
    public void save(String title,String content,int typeId) {
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(ADD_NOTE);
            preparedStatement.setString(1,title);
            preparedStatement.setString(2,content);
            preparedStatement.setInt(3,typeId);

            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void update(Note note) {
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(UPDATE_NOTE);
            preparedStatement.setString(1,note.getTitle());
            preparedStatement.setString(2,note.getContent());
            preparedStatement.setInt(3,note.getTypeId());
            preparedStatement.setInt(4,note.getId());

            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(int id) {
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(DELETE_NOTE);
            preparedStatement.setInt(1,id);

            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public Note seleteNote(int id) {
        Note note = new Note();
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(SELECT_NOTE_BY_ID);
            preparedStatement.setString(1, String.valueOf(id));

            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()){
                note = new Note();

                note.setId(resultSet.getInt("note_id"));
                note.setTitle(resultSet.getString("title"));
                note.setContent(resultSet.getString("content"));
                note.setType(resultSet.getString("name"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return note;
    }

    @Override
    public ArrayList<Note> seleteNoteByTitle(String title) {
        ArrayList<Note> noteList = new ArrayList<>();
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(SELECT_NOTE_BY_TITLE);
            preparedStatement.setString(1, title);

            ResultSet resultSet = preparedStatement.executeQuery();
            Note note = null;

            while (resultSet.next()){
                note = new Note();

                note.setId(resultSet.getInt("note_id"));
                note.setTitle(resultSet.getString("title"));
                note.setContent(resultSet.getString("content"));
                note.setType(resultSet.getString("name"));
                noteList.add(note);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return noteList;
    }

    @Override
    public ArrayList<Note> seleteNoteByType(int typeId) {
        ArrayList<Note> noteList = new ArrayList<>();
        try {
            PreparedStatement preparedStatement = this.baseDAO.getConnection().prepareStatement(SELECT_NOTE_BY_TYPE);
            preparedStatement.setInt(1, typeId);

            ResultSet resultSet = preparedStatement.executeQuery();
            Note note = null;

            while (resultSet.next()){
                note = new Note();

                note.setId(resultSet.getInt("note_id"));
                note.setTitle(resultSet.getString("title"));
                note.setContent(resultSet.getString("content"));
                note.setType(resultSet.getString("name"));
                noteList.add(note);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return noteList;
    }


}
