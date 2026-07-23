# 🤖 AI Enterprise Service Desk Copilot

An AI-powered Enterprise Service Desk Copilot that automates IT support workflows using intelligent AI agents built with **IBM watsonx Orchestrate** and **IBM Bob**.

> Developed for the **HackOn Agentic AI with IBM Bob & watsonx Hackathon 2026**.

---

## 🚀 Problem Statement

Enterprise IT support teams spend significant time handling repetitive employee issues such as:

- VPN connection failures
- Password reset requests
- Software installation
- Email access problems
- Hardware-related issues

This project automates the complete support workflow using AI Agents, reducing response time and improving employee productivity.

---

## 💡 Solution

The AI Enterprise Service Desk Copilot provides an intelligent support assistant capable of:

- Understanding employee issues
- Classifying support requests
- Suggesting troubleshooting steps
- Creating support tickets automatically
- Managing ticket lifecycle
- Assisting IT support engineers

---

## 🏗️ Architecture

```
Employee
    │
    ▼
React Frontend
    │
    ▼
Spring Boot REST API
    │
    ▼
IBM watsonx Orchestrate
    │
 ┌───────────────┐
 │ Intent Agent  │
 │ Knowledge AI  │
 │ Ticket Agent  │
 │ Notify Agent  │
 └───────────────┘
    │
    ▼
PostgreSQL
```

---

## 🛠️ Tech Stack

### Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- PostgreSQL
- Maven

### Frontend

- React
- Vite
- Bootstrap

### AI

- IBM watsonx Orchestrate
- IBM Bob

---

## ✨ Features

- User Authentication
- JWT Security
- AI-powered Issue Classification
- Knowledge Base Suggestions
- Automatic Ticket Creation
- Ticket Dashboard
- Employee Chat Interface
- Multi-Agent Workflow
