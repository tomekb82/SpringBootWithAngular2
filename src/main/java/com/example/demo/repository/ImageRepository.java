package com.example.demo.repository;

import com.example.demo.model.Image;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by tomek on 14.07.17.
 */
public interface ImageRepository extends CrudRepository<Image, Long> {

    List<Image> findByName(String name);

}
