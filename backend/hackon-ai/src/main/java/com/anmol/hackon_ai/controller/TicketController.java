package com.anmol.hackon_ai.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.anmol.hackon_ai.dto.TicketRequest;
import com.anmol.hackon_ai.entity.Ticket;
import com.anmol.hackon_ai.enums.TicketStatus;
import com.anmol.hackon_ai.service.TicketService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/tickets")
@RequiredArgsConstructor
@Validated
public class TicketController {

    private final TicketService ticketService;

    @PostMapping
    public ResponseEntity<Ticket> createTicket(
            @Valid @RequestBody TicketRequest request,
            Authentication authentication) {

        Ticket ticket =
                ticketService.createTicket(request, authentication);

        return ResponseEntity.ok(ticket);
    }

    @PreAuthorize("hasAnyRole('SUPPORT_ENGINEER','ADMIN')")
    @GetMapping
    public ResponseEntity<List<Ticket>> getAllTickets() {
        return ResponseEntity.ok(ticketService.getAllTickets());
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/my")
    public ResponseEntity<List<Ticket>> getMyTickets(Authentication authentication) {

        return ResponseEntity.ok(ticketService.getMyTickets(authentication));
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/{id}")
    public ResponseEntity<Ticket> getTicketById(@PathVariable Long id) {

        return ResponseEntity.ok(ticketService.getTicketById(id));
    }

    @PreAuthorize("hasAnyRole('SUPPORT_ENGINEER','ADMIN')")
    @PutMapping("/{id}/status")
    public ResponseEntity<Ticket> updateStatus(
            @PathVariable Long id,
            @RequestParam TicketStatus status) {

        return ResponseEntity.ok(ticketService.updateStatus(id, status));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable Long id) {
        ticketService.deleteTicket(id);
        return ResponseEntity.noContent().build();
    }

   @PreAuthorize("hasAnyRole('SUPPORT_ENGINEER','ADMIN')")
   @PutMapping("/{id}/assign")
    public ResponseEntity<Ticket> assignTicket(
            @PathVariable Long id,
            Authentication authentication) {

        return ResponseEntity.ok(
                ticketService.assignTicket(id, authentication));
    }

    @PreAuthorize("hasAnyRole('SUPPORT_ENGINEER','ADMIN')")
    @GetMapping("/assigned")
    public ResponseEntity<List<Ticket>> getAssignedTickets(
            Authentication authentication) {

        return ResponseEntity.ok(
                ticketService.getAssignedTickets(authentication));
    }
}