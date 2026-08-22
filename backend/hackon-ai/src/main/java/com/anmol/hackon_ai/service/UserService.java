package com.anmol.hackon_ai.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.anmol.hackon_ai.dto.UpdateUserRoleRequest;
import com.anmol.hackon_ai.dto.UserResponse;
import com.anmol.hackon_ai.entity.User;
import com.anmol.hackon_ai.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<UserResponse> getAllUsers() {

        return userRepository.findAll()
                .stream()
                .map(this::mapToUserResponse)
                .toList();
    }

    public UserResponse updateUserRole(
            Long id,
            UpdateUserRoleRequest request) {

        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        user.setRole(request.getRole());

        User updatedUser = userRepository.save(user);

        return mapToUserResponse(updatedUser);
    }

    private UserResponse mapToUserResponse(User user) {

        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole()
        );
    }
}