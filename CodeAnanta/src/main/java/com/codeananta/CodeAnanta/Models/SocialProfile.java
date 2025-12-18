package com.codeananta.CodeAnanta.Models;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class SocialProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @OneToOne(mappedBy = "socialProfile")
//    @JoinColumn(name = "social_user")
    private SocialUser socialUser;
}
