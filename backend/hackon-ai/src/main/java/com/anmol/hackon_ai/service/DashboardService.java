package com.anmol.hackon_ai.service;

import org.springframework.stereotype.Service;

import com.anmol.hackon_ai.dto.DashboardResponse;
import com.anmol.hackon_ai.enums.TicketPriority;
import com.anmol.hackon_ai.enums.TicketStatus;
import com.anmol.hackon_ai.repository.TicketRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final TicketRepository ticketRepository;

    public DashboardResponse getDashboard() {

        return new DashboardResponse(
                ticketRepository.count(),
                ticketRepository.countByStatus(TicketStatus.OPEN),
                ticketRepository.countByStatus(TicketStatus.IN_PROGRESS),
                ticketRepository.countByStatus(TicketStatus.RESOLVED),
                ticketRepository.countByPriority(TicketPriority.HIGH)
        );
    }
}