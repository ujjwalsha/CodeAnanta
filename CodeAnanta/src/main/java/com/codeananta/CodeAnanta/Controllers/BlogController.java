package com.codeananta.CodeAnanta.Controllers;


import com.codeananta.CodeAnanta.Models.Blog;
import com.codeananta.CodeAnanta.Services.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BlogController {

    private final BlogService blogService;

    @Autowired
    public BlogController(BlogService blogService)
    {
        this.blogService = blogService;
    }



}
