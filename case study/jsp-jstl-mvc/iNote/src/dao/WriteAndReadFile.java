package dao;

import model.Note;

import java.util.ArrayList;

public interface WriteAndReadFile {
    void save(ArrayList<Note>noteList);
    void delete();
}
