package bo;

import dao.NoteDAO;
import dao.NoteDAOImpl;
import dao.WriteAndReadFile;
import dao.WriteAndReadFileImpl;
import model.Note;
import model.NoteType;

import java.util.ArrayList;
import java.util.List;

public class NoteBOImpl implements NoteBO {

    private NoteDAO noteDAO = new NoteDAOImpl();
    private WriteAndReadFile writeAndReadFile = new WriteAndReadFileImpl();


    @Override
    public List<Note> findAll(int offset, int noOfRecords) {
        return this.noteDAO.findAll();
    }

    @Override
    public List<NoteType> findAllNoteType() {
        return this.noteDAO.findAllNoteType();
    }

    @Override
    public void save(String title,String content,int typeId) {
        this.noteDAO.save(title,content,typeId);
    }

    @Override
    public void update(Note note) {
        this.noteDAO.update(note);
    }

    @Override
    public void delete(int id) {
        this.noteDAO.delete(id);
    }

    @Override
    public void saveFile() {
        this.writeAndReadFile.save(this.noteDAO.findAll());
    }

    @Override
    public Note seleteNote(int id) {
        return this.noteDAO.seleteNote(id);
    }

    @Override
    public List<Note> seleteNoteByTitle(String title) {
        return this.noteDAO.seleteNoteByTitle(title);
    }

    @Override
    public List<Note> seleteNoteByType(int typeId) {
        return this.noteDAO.seleteNoteByType(typeId);
    }
}
