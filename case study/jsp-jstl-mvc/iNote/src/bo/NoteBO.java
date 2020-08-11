package bo;

import model.Note;
import model.NoteType;

import java.util.ArrayList;
import java.util.List;

public interface NoteBO {
    ArrayList<Note> findAll(int offset, int noOfRecords);
    List<NoteType> findAllNoteType();
    void save(String title,String content,int typeId);
    void update(Note note);
    void delete(int id);
    void saveFile();
    void deleteFile(ArrayList<Note> noteList, int id);
    public Note seleteNote(int id);
    List<Note> seleteNoteByTitle(String title);
    List<Note> seleteNoteByType(int typeId);
}
