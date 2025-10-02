package com.example.examportal;

import com.example.examportal.model.Role;
import com.example.examportal.model.User;
import com.example.examportal.model.UserRole;
import com.example.examportal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ExamportalApplication  {
	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(ExamportalApplication.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception{
//
//		User user = new User();
//
//		user.setFirstName("Ankit");
//		user.setLastName("Kumar");
//		user.setUsername("kuankit2017");
//		user.setPassword("ankit123");
//		user.setEmail("ankit@gmail.com");
//		user.setProfile("default.png");
//		user.setPhone("9847391111");
//
//		Role role1 = new Role();
//		role1.setRoleId(44L);
//		role1.setRoleName("ADMIN");
//
//		Set<UserRole> userRoleSet = new HashSet<>();
//		UserRole userRole = new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//		userRoleSet.add(userRole);
//		User user1 = userService.createUser(user, userRoleSet);
//	}
}
