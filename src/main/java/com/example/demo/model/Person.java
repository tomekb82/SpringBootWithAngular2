package com.example.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String firstname;

    @Column
    private String surname;

    @Column
    private int age;

    public Person(final String firstname, final String surname) {
        this.firstname = firstname;
        this.surname = surname;
    }

    public Person(final String firstname, final String surname, final int age) {
        this(firstname, surname);
        this.age = age;
    }
}