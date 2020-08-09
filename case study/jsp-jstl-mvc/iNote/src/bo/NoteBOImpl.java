package bo;

import dao.NoteDAO;
import dao.NoteDAOImpl;
import model.Note;
import model.NoteType;

import java.util.List;

public class NoteBOImpl implements NoteBO {

    private NoteDAO noteDAO = new NoteDAOImpl();


    @Override
    public List<Note> findAll(int offset, int noOfRecords) {
        return this.noteDAO.findAll(offset,noOfRecords);
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
    public Note seleteNote(int id) {
        return this.noteDAO.seleteNote(id);
    }

    @Override
    public List<Note> seleteNoteByTitle(String title) {
        return this.noteDAO.seleteNoteByTitle(title);
    }
}
