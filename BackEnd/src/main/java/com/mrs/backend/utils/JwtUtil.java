package com.mrs.backend.utils;

import io.jsonwebtoken.*;
import io.jsonwebtoken.SignatureAlgorithm;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.*;
import jakarta.annotation.PostConstruct;
import org.apache.catalina.security.DeployXmlPermission;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private int expiration;

    private Key key;

    @PostConstruct
    public void init() {
        key = Keys.hmacShaKeyFor(secret.getBytes());
    }

    public String generateToken(String user) {
        return Jwts.builder()
                .setSubject(user)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(key, io.jsonwebtoken.SignatureAlgorithm.HS256)
                .compact();
    }
        public String extractUsername (String token){
            return getClaims(token).getSubject();

    }

        public boolean validateToken (String token){
            try {
                getClaims(token);
                return true;
            } catch (JwtException | IllegalArgumentException e) {
                return false;
            }
    }

        private Claims getClaims (String token){
            return Jwts.parser()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
    }
}
