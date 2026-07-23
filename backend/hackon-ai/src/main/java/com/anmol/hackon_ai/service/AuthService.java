package com.anmol.hackon_ai.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.anmol.hackon_ai.dto.AuthResponse;
import com.anmol.hackon_ai.dto.LoginRequest;
import com.anmol.hackon_ai.dto.RegisterRequest;
import com.anmol.hackon_ai.entity.User;
import com.anmol.hackon_ai.exception.EmailAlreadyExistsException;
import com.anmol.hackon_ai.exception.InvalidCredentialsException;
import com.anmol.hackon_ai.repository.UserRepository;
import com.anmol.hackon_ai.security.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists");
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));   // We'll encrypt this later
        user.setRole("USER");

        userRepository.save(user);

        return new AuthResponse("User registered successfully", null);
    }

    public AuthResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if(!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse("Login successful", token);
    }
}