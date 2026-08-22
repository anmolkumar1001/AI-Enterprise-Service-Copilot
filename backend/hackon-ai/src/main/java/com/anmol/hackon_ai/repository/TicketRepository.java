package com.anmol.hackon_ai.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anmol.hackon_ai.entity.Ticket;
import com.anmol.hackon_ai.enums.TicketPriority;
import com.anmol.hackon_ai.enums.TicketStatus;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    List<Ticket> findByCreatedBy(String createdBy);

    long countByStatus(TicketStatus status);

    long countByPriority(TicketPriority priority);

    List<Ticket> findByAssignedTo(String assignedTo);
}