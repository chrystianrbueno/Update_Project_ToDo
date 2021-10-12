package br.com.example.todoproject.repository;

import br.com.example.todoproject.builder.Todo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TodoRepository extends CrudRepository<Todo, Long> {
    public List<Todo> findAll();
}
