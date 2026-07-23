package com.anmol.hackon_ai.service;

import org.springframework.stereotype.Service;

import com.anmol.hackon_ai.dto.AuthResponse;
import com.anmol.hackon_ai.dto.RegisterRequest;
import com.anmol.hackon_ai.entity.User;
import com.anmol.hackon_ai.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());   // We'll encrypt this later
        user.setRole("USER");

        userRepository.save(user);

        return new AuthResponse("User registered successfully");
    }
}