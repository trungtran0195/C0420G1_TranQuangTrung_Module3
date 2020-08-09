package dao;

import model.Note;
import model.NoteType;

import java.util.ArrayList;

public interface NoteDAO {
    ArrayList<Note> findAll(int offset, int noOfRecords);
    ArrayList<NoteType> findAllNoteType();
    void save(String title,String content,int typeId);
    void update(Note note);
    void delete(int id);
    public Note seleteNote(int id);
    public int getNoOfRecords();
    ArrayList<Note> seleteNoteByTitle(String title);
}
