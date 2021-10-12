package br.com.example.todoproject.builder;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@Data
@Entity
@Table(name="todos")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Long id;

    @Column
    private String descricao;

    @Column
    private boolean status;

    @Builder
    public Todo(String descricao, boolean status) {
        this.descricao = descricao;
        this.status = status;
    }
}


