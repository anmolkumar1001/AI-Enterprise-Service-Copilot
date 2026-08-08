package com.anmol.hackon_ai.dto;

import com.anmol.hackon_ai.enums.TicketCategory;
import com.anmol.hackon_ai.enums.TicketPriority;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class TicketRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    @NotNull
    private TicketCategory category;

    @NotNull
    private TicketPriority priority;
}