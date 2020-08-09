package bo;

import model.Note;
import model.NoteType;

import java.util.List;

public interface NoteBO {
    List<Note> findAll(int offset, int noOfRecords);
    List<NoteType> findAllNoteType();
    void save(String title,String content,int typeId);
    void update(Note note);
    void delete(int id);
    public Note seleteNote(int id);
    List<Note> seleteNoteByTitle(String title);
}
