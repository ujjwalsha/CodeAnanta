package com.codeananta.CodeAnanta.Services;


import com.codeananta.CodeAnanta.Models.Blog;
import com.codeananta.CodeAnanta.Repositories.BlogRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class BlogService {

    private final BlogRepo blogRepo;

    @Autowired
    public BlogService(BlogRepo blogRepo)
    {
        this.blogRepo = blogRepo;
    }


    public ResponseEntity<?> getAllBlog() {

        List<Blog> existData = blogRepo.findAll();

        if(existData.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        return ResponseEntity.status(HttpStatus.OK).body(Map.of("Data", existData));
    }


    public ResponseEntity<?> addBlog(Blog blog) {

        Optional<Blog> existData = blogRepo.findByTitle(blog.getTitle());

        if(existData.isPresent())
        {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("message", "Blog already exist!"));
        }

        Blog data = new Blog();

        data.setTitle(blog.getTitle());
        data.setContent(blog.getContent());
        data.setThumbnailUrl(blog.getThumbnailUrl());

        blogRepo.save(data);

        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("message", "successfully added"));
    }

    public ResponseEntity<?> deleteById(int id) {

        if(blogRepo.existsById(id))
        {
            blogRepo.deleteById(id);
            return ResponseEntity.status(HttpStatus.valueOf(200)).body(Map.of("message", "Deletion Successfully!"));
        }

        return ResponseEntity.status(HttpStatus.valueOf(400)).body(Map.of("message", "deletion failed"));
    }
}
