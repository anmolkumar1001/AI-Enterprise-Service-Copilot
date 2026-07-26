package com.anmol.hackon_ai.service;

import org.springframework.stereotype.Service;

import com.anmol.hackon_ai.dto.AIResponse;

@Service
public class AIService {

    public AIResponse getResponse(String message) {

        String msg = message.toLowerCase();

        if(msg.contains("vpn")) {

            return new AIResponse(
                    "Try reconnecting your VPN and restart the VPN client.",
                    false);

        }

        if(msg.contains("password")) {

            return new AIResponse(
                    "Please reset your password using the self-service portal.",
                    false);

        }

        if(msg.contains("printer")) {

            return new AIResponse(
                    "Restart the printer and verify the network connection.",
                    false);

        }

        return new AIResponse(
                "I couldn't identify this issue. You can create a support ticket automatically.",
                true);

    }

}