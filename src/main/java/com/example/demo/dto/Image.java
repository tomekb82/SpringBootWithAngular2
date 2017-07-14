package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by tomasz.belina on 2017-07-14.
 */
@Getter
@Setter
public class Image {

    private Long id;
    private String name;
    private String url;
    private String description;
    private ImageType type;
}
