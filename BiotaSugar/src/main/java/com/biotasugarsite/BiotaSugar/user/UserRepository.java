package com.biotasugarsite.BiotaSugar.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);

}
