package com.mrs.backend.controllers;

import com.mrs.backend.dto.AuthResponse;
import com.mrs.backend.dto.LoginRequest;
import com.mrs.backend.dto.RegisterRequest;
import com.mrs.backend.models.User;
import com.mrs.backend.services.AuthServices;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthServices authService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody RegisterRequest request) {
        System.out.println("HIT /auth/register with " + request);

        User newUser = authService.register(request.getName(), request.getEmail(), request.getPassword());
        return ResponseEntity.ok(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        String token = authService.login(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(new AuthResponse(token));
    }

}
