package com.anmol.hackon_ai.controller;

import org.springframework.web.bind.annotation.*;

import com.anmol.hackon_ai.dto.AIRequest;
import com.anmol.hackon_ai.dto.AIResponse;
import com.anmol.hackon_ai.service.AIService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class AIController {

    private final AIService aiService;

    @PostMapping("/chat")
    public AIResponse chat(@RequestBody AIRequest request) {

        return new AIResponse(
                aiService.getResponse(request.getMessage())
        );

    }

}