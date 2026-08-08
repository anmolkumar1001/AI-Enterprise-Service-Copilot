package com.anmol.hackon_ai.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anmol.hackon_ai.entity.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    List<Ticket> findByCreatedBy(String createdBy);

    long countByStatus(String status);

    long countByPriority(String priority);

    List<Ticket> findByAssignedTo(String assignedTo);
}