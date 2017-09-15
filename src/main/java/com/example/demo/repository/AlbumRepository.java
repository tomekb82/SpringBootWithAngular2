package com.example.demo.repository;

import com.example.demo.dto.AlbumType;
import com.example.demo.model.Album;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by tomek on 14.07.17.
 */
public interface AlbumRepository extends CrudRepository<Album, Long> {

    List<Album> findByName(String name);

    List<Album> findByType(AlbumType type);

}
