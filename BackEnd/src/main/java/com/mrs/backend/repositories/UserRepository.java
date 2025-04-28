package com.mrs.backend.repositories;

import com.mrs.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository

public interface UserRepository extends JpaRepository<User, Long> {

    //Find users by email
    Optional<User> findByEmail(String email);

    //Sees if Email Exist
    boolean existsByEmail(String email);

    //Find user by Roles
    List<User> findByRole(String role);
}
