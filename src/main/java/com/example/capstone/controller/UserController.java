/*package com.example.capstone.controller;

import com.example.capstone.model.User;
import com.example.capstone.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService; // UserService 인스턴스 주입

    @Autowired
    private PasswordEncoder passwordEncoder; // PasswordEncoder 인스턴스 주입

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        User registeredUser = userService.register(user, passwordEncoder); // PasswordEncoder 전달
        return ResponseEntity.ok(registeredUser); // 등록된 사용자 반환
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        boolean isAuthenticated = userService.authenticate(user.getUsername(), user.getPassword(), passwordEncoder);
        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("아이디나 비밀번호가 틀렸습니다.");
        }
    }

}*/
