package br.com.example.todoproject.controller;

import br.com.example.todoproject.builder.Todo;
import br.com.example.todoproject.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    @GetMapping(produces = "application/json")
    public List<Todo> getAllTodos(){
        return todoRepository.findAll();
    }
}