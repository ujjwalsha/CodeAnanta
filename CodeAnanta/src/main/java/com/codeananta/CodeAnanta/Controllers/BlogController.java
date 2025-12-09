package com.codeananta.CodeAnanta.Controllers;


import com.codeananta.CodeAnanta.Models.Blog;
import com.codeananta.CodeAnanta.Services.BlogService;
import com.codeananta.CodeAnanta.Services.UploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class BlogController {

    private final BlogService blogService;
    private final UploadService uploadService;

    @Autowired
    public BlogController(BlogService blogService, UploadService uploadService)
    {
        this.blogService = blogService;
        this.uploadService = uploadService;
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllBlog()
    {
        return blogService.getAllBlog();
    }

    @PostMapping("/add")
    public ResponseEntity<?> addBlog(Blog blog)
    {
        return blogService.addBlog(blog);
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("image") MultipartFile file)
    {
        Map data = uploadService.upload(file);

        return new ResponseEntity<>(data, HttpStatusCode.valueOf(200));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable int id)
    {
        return blogService.deleteById(id);
    }
}
