package com.example.demo.model;

import com.example.demo.dto.AlbumType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

/**
 * Created by tomek on 14.07.17.
 */
@Entity
@NoArgsConstructor
@Getter
public class Image {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    @Setter
    private String name;
    @Setter
    private String url;
    @Setter
    private String description;
    @Setter
    private boolean favourite;
    @Setter
    @ManyToOne
    @JoinColumn(name="ALBUM_ID")
    private Album album;

    public Image(String name, String url) {
        this.name = name;
        this.url = url;
    }

    @Override
    public String toString() {
        return "Image{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", url='" + url + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
