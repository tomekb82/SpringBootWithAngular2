package com.example.demo.model;

import com.example.demo.dto.AlbumType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Calendar;
import java.util.List;

/**
 * Created by tomek on 14.07.17.
 */
@Entity
@NoArgsConstructor
@Getter
public class Album {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    @Setter
    private String name;
    @Setter
    private String description;
    @Setter
    private String opis;
    @Setter
    @Enumerated(EnumType.STRING)
    private AlbumType type;
    @Setter
    private boolean favourite;
    @Setter
    private Calendar createdDate;
    @Setter
    @OneToMany(mappedBy="album")
    private List<Image> images;


}
