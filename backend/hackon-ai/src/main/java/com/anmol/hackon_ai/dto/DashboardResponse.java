package com.anmol.hackon_ai.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DashboardResponse {

    private long totalTickets;

    private long openTickets;

    private long inProgressTickets;

    private long resolvedTickets;

    private long highPriorityTickets;
}