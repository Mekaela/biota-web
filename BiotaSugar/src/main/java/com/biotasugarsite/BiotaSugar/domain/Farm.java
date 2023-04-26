package com.biotasugarsite.BiotaSugar.domain;

//import com.biotasugarsite.BiotaSugar.user.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Farm {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	private String Address;
	private String gpsCoordinates;
//	TODO: in future change to company, not user
	@ManyToOne
//	private User users;
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getGpsCoordinates() {
		return gpsCoordinates;
	}
	public void setGpsCoordinates(String gpsCoordinates) {
		this.gpsCoordinates = gpsCoordinates;
	}
//	public User getUsers() {
//		return users;
//	}
//	public void setUsers(User users) {
//		this.users = users;
//	}
}
