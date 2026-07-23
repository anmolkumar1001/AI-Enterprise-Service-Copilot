package com.anmol.hackon_ai.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class TicketRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    private String category;

    private String priority;
}