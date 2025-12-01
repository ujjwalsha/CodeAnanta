package com.codeananta.CodeAnanta.Controllers;


import com.codeananta.CodeAnanta.Models.Blog;
import com.codeananta.CodeAnanta.Services.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class BlogController {

    private final BlogService blogService;

    @Autowired
    public BlogController(BlogService blogService)
    {
        this.blogService = blogService;
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
}
