package dao;

import model.Note;

import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

public class WriteAndReadFileImpl implements WriteAndReadFile{
    protected static final String pathSave = "D:\\ProjectCodeGym\\C0420G1_TranQuangTrung_Module3\\case study\\jsp-jstl-mvc\\iNote\\src\\data\\SaveNote.csv";
    private static final String BIG_SPACE = "   ";
    private static final String SMALL_SPACE = " ";
    private static final String COMMA_DELIMITER = ",\n";
    private static final String NEW_LINE_SEPARATOR = "\n";
    private static final String BRACKET_START = "{";
    private static final String BRACKET_STOP = "}";
    private static final String FILE_HEADER = "{\n" +
            "   Note: [\n";
    private static final String FILE_FOOTER = "   ]\n" +
            "}";
    private static final String ID = "      id: ";
    private static final String TITLE = "      title: ";
    private static final String CONTENT = "      content: ";
    private static final String TYPE = "      type: ";

    @Override
    public void save(ArrayList<Note> noteList) {
        checkFileExists(pathSave);

        try{
            FileWriter fileWriter = new FileWriter(pathSave);
            StringBuffer buffer = new StringBuffer();
            fileWriter.append(FILE_HEADER);

            for (Note note: noteList){
                buffer.append(BIG_SPACE).append(BRACKET_START);
                buffer.append(ID).append(note.getId()).append(COMMA_DELIMITER);
                buffer.append(TITLE).append(note.getTitle()).append(COMMA_DELIMITER);
                buffer.append(CONTENT).append(note.getContent()).append(COMMA_DELIMITER);
                buffer.append(TYPE).append(note.getType()).append(NEW_LINE_SEPARATOR);
                buffer.append(BIG_SPACE).append(BRACKET_STOP).append(COMMA_DELIMITER);
                System.out.println(note.getTitle());
                fileWriter.append(buffer.toString());
            }

            fileWriter.append(FILE_FOOTER);
            fileWriter.flush();
            fileWriter.close();
        }catch (IOException ioException) {
            ioException.printStackTrace();
        }
    }

    @Override
    public void delete() {
    }

    public static void checkFileExists(String filePath) {
            try {
                if (!Files.exists(Paths.get(filePath))) {
                    Files.createFile(Paths.get(filePath));
                }else if(Files.exists(Paths.get(filePath))){
                    Files.delete(Paths.get(filePath));
                    Files.createFile(Paths.get(filePath));
                }
            } catch (IOException ioException) {
                ioException.printStackTrace();
            }
        }
    }
