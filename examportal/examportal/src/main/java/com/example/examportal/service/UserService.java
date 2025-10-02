package com.example.examportal.service;

import com.example.examportal.model.User;
import com.example.examportal.model.UserRole;

import java.util.Set;

public interface UserService {

    User createUser(User user, Set<UserRole> userRoles) throws Exception;

    User getUser(String username);

    void deleteUser(Long userId);

}
