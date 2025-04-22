package com.mrs.backend.test;

import com.mrs.backend.models.User;
import com.mrs.backend.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserRepositoryTestRunner implements CommandLineRunner {

    private final UserRepository userRepo;

    public UserRepositoryTestRunner(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Running UserRepository test...");

        // Insert only if it doesn't exist
        if (!userRepo.existsByEmail("test@example.com")) {
            userRepo.save(User.builder()
                    .email("test@example.com")
                    .password("password123")
                    .username("test")
                    .name("Test User")
                    .role("USER")
                    .build());
            System.out.println(" Test user saved.");
        }

        // Fetch by email
        userRepo.findByEmail("test@example.com").ifPresent(user ->
                System.out.println("Found user by email: " + user.getName()));

        // Fetch by role
        userRepo.findByRole("USER").forEach(user ->
                System.out.println(" User with role USER: " + user.getName()));
    }
}
