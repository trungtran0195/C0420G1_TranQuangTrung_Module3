package controller;

import bo.NoteBO;
import bo.NoteBOImpl;
import dao.NoteDAO;
import dao.NoteDAOImpl;
import model.Note;
import model.NoteType;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "NoteServlet", urlPatterns = "   ")
public class NoteServlet extends HttpServlet {

    private NoteBO noteBO = new NoteBOImpl();
    private NoteDAO noteDAO = new NoteDAOImpl();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");

        if(action == null){
            action = "";
        }
        switch (action){
            case "create":
                addNewNote(request, response);
                break;
            case "edit":
                editNote(request, response);
                break;
            case "delete":
                deleteNote(request, response);
                break;
            default:
                break;
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");
        if(action == null){
            action = "";
        }
        switch (action){
            case "create":
                showCreateForm(request, response);
                break;
            case "edit":
                //click edit will take id to go here first
                showEditForm(request, response);
                break;
            case "delete":
                showDeleteForm(request, response);
                break;
            case "view":
                viewNote(request, response);
                break;
            case "searchBlog":
                searchNote(request, response);
                break;
            case "deleteFile":
                deleteFile(request,response);
                break;
            default:
                listNotes(request, response);
                break;
        }
    }

    private void showCreateForm(HttpServletRequest request, HttpServletResponse response) {
        RequestDispatcher dispatcher = request.getRequestDispatcher("note/create.jsp");
        try {
            //note type table
            List<NoteType> noteTypeList = this.noteBO.findAllNoteType();
            request.setAttribute("noteType", noteTypeList);
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void addNewNote(HttpServletRequest request, HttpServletResponse response) {
        //input
        String title = request.getParameter("title");
        String content = request.getParameter("content");
        String typeId = request.getParameter("typeID");


        this.noteBO.save(title,content,Integer.parseInt(typeId));
        RequestDispatcher dispatcher = request.getRequestDispatcher("note/create.jsp");
        this.noteBO.saveFile();
        request.setAttribute("message", "New note was created");
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    private void editNote(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        String title = request.getParameter("title");
        String content = request.getParameter("content");
        String typeId = request.getParameter("typeID");

        Note note = this.noteBO.seleteNote(id);
        RequestDispatcher dispatcher;
        if(note == null){
            dispatcher = request.getRequestDispatcher("error-404.jsp");
        } else {
            note.setId(id);
            note.setTitle(title);
            note.setContent(content);
            note.setTypeId(Integer.parseInt(typeId));
            this.noteBO.update(note);
            request.setAttribute("notes", note);
            request.setAttribute("message", "Note has been edited");
            dispatcher = request.getRequestDispatcher("note/edit.jsp");
        }
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void showEditForm(HttpServletRequest request, HttpServletResponse response) {
        //get the note detail then bring it to edit form
        List<NoteType> noteTypeList = this.noteBO.findAllNoteType();
        request.setAttribute("noteType", noteTypeList);
        int id = Integer.parseInt(request.getParameter("id"));
        Note note = this.noteBO.seleteNote(id);
        RequestDispatcher dispatcher;
        if(note == null){
            dispatcher = request.getRequestDispatcher("error-404.jsp");
        } else {
            request.setAttribute("notes", note);
            dispatcher = request.getRequestDispatcher("note/edit.jsp");
        }
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void deleteNote(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        Note note = this.noteBO.seleteNote(id);
        RequestDispatcher dispatcher;
        if(note == null){
            dispatcher = request.getRequestDispatcher("error-404.jsp");
        } else {
            this.noteBO.delete(id);
            try {
                String message = "Note has been deleted";
                request.getSession().setAttribute("message", message);
                response.sendRedirect("/blog");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private void showDeleteForm(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        Note note = this.noteBO.seleteNote(id);
        RequestDispatcher dispatcher;
        if(note == null){
            dispatcher = request.getRequestDispatcher("error-404.jsp");
        } else {
            request.setAttribute("notes", note);
            dispatcher = request.getRequestDispatcher("note/delete.jsp");
        }
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void viewNote(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        Note note = this.noteBO.seleteNote(id);
        RequestDispatcher dispatcher;
        if(note == null){
            dispatcher = request.getRequestDispatcher("error-404.jsp");
        } else {
            request.setAttribute("notes", note);
            dispatcher = request.getRequestDispatcher("note/view.jsp");
        }
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void searchNote(HttpServletRequest request, HttpServletResponse response) {
        String searchTitle = request.getParameter("searchTitle");
        String searchType = request.getParameter("searchType");
        List<Note> listNotes = this.noteBO.seleteNoteByTitle(searchTitle);
        List<Note> listNotesByType = null;
        if (searchType != null) {
            listNotesByType = this.noteBO.seleteNoteByType(Integer.parseInt(searchType));
        }
        RequestDispatcher dispatcher;
        if(listNotes == null && listNotesByType == null){
            dispatcher = request.getRequestDispatcher("error-404.jsp");
        } else if (listNotes != null && listNotesByType == null){
            List<NoteType> noteTypeList = this.noteBO.findAllNoteType();
            request.setAttribute("noteType", noteTypeList);
            request.setAttribute("notes", listNotes);
            dispatcher = request.getRequestDispatcher("note/list.jsp");
        } else {
            List<NoteType> noteTypeList = this.noteBO.findAllNoteType();
            request.setAttribute("noteType", noteTypeList);
            request.setAttribute("notes", listNotesByType);
            dispatcher = request.getRequestDispatcher("note/list.jsp");
        }
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void deleteFile(HttpServletRequest request, HttpServletResponse response) {
        int id = Integer.parseInt(request.getParameter("id"));
        Note note = this.noteBO.seleteNote(id);
        ArrayList<Note> noteList = this.noteBO.findAll(1,1);
        RequestDispatcher dispatcher;
        if(note == null){
            dispatcher = request.getRequestDispatcher("error-404.jsp");
        } else {
            this.noteBO.deleteFile(noteList,id);
            try {
                String message = "Note has been deleted from file";
                request.getSession().setAttribute("message", message);
                response.sendRedirect("/blog");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private void listNotes(HttpServletRequest request, HttpServletResponse response) {
        int page = 1;
        int recordsPerPage = 5;
        if(request.getParameter("page") != null)
            page = Integer.parseInt(request.getParameter("page"));

        List<NoteType> noteTypeList = this.noteBO.findAllNoteType();
        List<Note> notes = this.noteBO.findAll((page-1)*recordsPerPage, recordsPerPage);
//        int noOfRecords = noteDAO.getNoOfRecords();
//        int noOfPages = (int) Math.ceil(noOfRecords * 1.0 / recordsPerPage);
        request.setAttribute("notes", notes);
        request.setAttribute("noteType", noteTypeList);
//        request.setAttribute("noOfPages", noOfPages);
        request.setAttribute("currentPage", page);

        RequestDispatcher dispatcher = request.getRequestDispatcher("note/list.jsp");
        try {
            dispatcher.forward(request, response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
