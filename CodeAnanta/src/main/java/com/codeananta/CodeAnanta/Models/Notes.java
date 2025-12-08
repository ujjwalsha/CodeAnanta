package com.codeananta.CodeAnanta.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Notes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String image_url;

    @Column(nullable = false)
    private String content;

    @OneToOne(mappedBy = "notes")
    private Questions questions;
}
