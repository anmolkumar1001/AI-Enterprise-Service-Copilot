package com.anmol.hackon_ai.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.anmol.hackon_ai.dto.TicketRequest;
import com.anmol.hackon_ai.entity.Ticket;
import com.anmol.hackon_ai.repository.TicketRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;

    public Ticket createTicket(TicketRequest request, Authentication authentication) {

        Ticket ticket = new Ticket();

        ticket.setTitle(request.getTitle());
        ticket.setDescription(request.getDescription());
        ticket.setCategory(request.getCategory());
        ticket.setPriority(request.getPriority());

        ticket.setStatus("OPEN");
        ticket.setCreatedAt(LocalDateTime.now());

        if(authentication != null) {
            ticket.setCreatedBy(authentication.getName());      
        } 
        else {
            ticket.setCreatedBy("watsonx-orchestrate");
        }

        return ticketRepository.save(ticket);
    }

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public List<Ticket> getMyTickets(Authentication authentication) {

        return ticketRepository.findByCreatedBy(authentication.getName());
    }

    public Ticket getTicketById(Long id) {

        return ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));
    }

    public Ticket updateStatus(Long id, String status) {

        Ticket ticket = ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));

        ticket.setStatus(status);

        return ticketRepository.save(ticket);
    }

    public void deleteTicket(Long id) {

        ticketRepository.deleteById(id);
    }
}