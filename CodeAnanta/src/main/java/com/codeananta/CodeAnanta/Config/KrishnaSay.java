package com.codeananta.CodeAnanta.Config;

import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;

@Configuration
public class KrishnaSay {

    @PostConstruct
    public void sayhello()
    {
        System.out.println("Hello from jai shree krishna Ji!");
    }
}
