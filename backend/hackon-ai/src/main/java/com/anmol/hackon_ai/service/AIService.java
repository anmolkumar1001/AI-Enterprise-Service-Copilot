package com.anmol.hackon_ai.service;

import org.springframework.stereotype.Service;

@Service
public class AIService {

    public String getResponse(String message) {

        message = message.toLowerCase();

        if (message.contains("vpn")) {
            return "Try reconnecting your VPN and restarting the VPN client.";
        }

        if (message.contains("password")) {
            return "Please reset your password using the self-service portal.";
        }

        if (message.contains("printer")) {
            return "Check the printer connection and restart the printer.";
        }

        return "I couldn't identify the issue. Please create a support ticket.";

    }

}