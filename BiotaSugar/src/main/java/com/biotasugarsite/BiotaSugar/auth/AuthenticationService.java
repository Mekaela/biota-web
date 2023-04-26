package com.biotasugarsite.BiotaSugar.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.biotasugarsite.BiotaSugar.config.JwtService;
import com.biotasugarsite.BiotaSugar.user.Role;
import com.biotasugarsite.BiotaSugar.user.User;
import com.biotasugarsite.BiotaSugar.user.UserRepository;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	private final UserRepository repository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;

	public AuthenticationResponse register(RegisterRequest request) {
		var user = User.builder().firstname(request.getFirstname()).lastname(request.getLastname())
				.email(request.getEmail()).password(passwordEncoder.encode(request.getPassword())).role(Role.USER)
				.build();
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder().token(jwtToken)

				.build();
	}

	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		var user = repository.findByEmail(request.getEmail()).orElseThrow();
		var jwtToken = jwtService.generateToken(user);

		return AuthenticationResponse.builder().token(jwtToken)

				.build();
	}

//	  TODO: Finish rest of tutorial from AmogosCode: https://www.youtube.com/watch?v=KxqlJblhzfI
//	   github: https://github.com/ali-bouali/spring-boot-3-jwt-security


}
