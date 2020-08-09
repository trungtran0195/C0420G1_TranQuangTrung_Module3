package model;

public class Note extends NoteType{
    int id;
    String title;
    String content;

    public Note() {
    }

    public Note(int typeId,String type ,int id, String title, String content) {
        super(typeId, type);
        this.id = id;
        this.title = title;
        this.content = content;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

}
