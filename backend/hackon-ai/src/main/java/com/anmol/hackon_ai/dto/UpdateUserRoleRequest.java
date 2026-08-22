package com.anmol.hackon_ai.dto;

import com.anmol.hackon_ai.enums.Role;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UpdateUserRoleRequest {

    @NotNull(message = "Role is required")
    private Role role;
}
