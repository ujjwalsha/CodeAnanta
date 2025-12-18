package com.codeananta.CodeAnanta.Models;


import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class SocialUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private SocialProfile socialProfile;

    @OneToMany(mappedBy = "socialUser")
    private List<Post> postList = new ArrayList<>();

}
