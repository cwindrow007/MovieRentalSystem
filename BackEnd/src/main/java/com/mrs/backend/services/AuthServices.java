package com.mrs.backend.services;

import com.mrs.backend.models.User;
import com.mrs.backend.repositories.UserRepository;
import com.mrs.backend.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthServices {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public User register(String name, String email, String password) {
        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already exists");
        }
        User user = User.builder()
                .name(name)
                .email(email)
                .password(passwordEncoder.encode(password))
                .role("User")
                .username(email.split("@")[0])
                .build();
        return userRepository.save(user);
    }


    public String login(String email, String rawPassword) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isEmpty() || !passwordEncoder.matches(rawPassword, user.get().getPassword())) {
            throw new RuntimeException("Invalid Email or Password");
        }

        return jwtUtil.generateToken(user.get().getEmail());
    }
}