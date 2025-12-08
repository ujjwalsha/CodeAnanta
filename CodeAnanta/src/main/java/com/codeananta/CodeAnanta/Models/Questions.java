package com.codeananta.CodeAnanta.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.aspectj.weaver.ast.Not;

import java.util.UUID;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Questions {

    //UUID -- Universally unique identifier -- Globally used, NO risk of collision accross distributed systems

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false)
    private String question_name;

    @Column(nullable = false)
    private String level;

    @Column(nullable = false)
    private String course_url;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "notes_id", referencedColumnName ="id")
    private Notes notes;


}
