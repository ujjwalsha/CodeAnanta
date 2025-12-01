package com.codeananta.CodeAnanta.Repositories;

import com.codeananta.CodeAnanta.Models.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BlogRepo extends JpaRepository<Blog, Integer> {
    Optional<Blog> findByTitle(String title);
}
