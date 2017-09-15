package com.example.demo.dto;

import com.example.demo.model.Image;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.dozer.Mapping;

import javax.persistence.*;
import java.util.Calendar;
import java.util.List;

/**
 * Created by tomek on 14.07.17.
 */
@Setter
@Getter
@ApiModel(description = "Album DTO")
public class Album {

    private Long id;
    @ApiModelProperty(notes = "Album name")
    private String name;
    @Mapping("opis")
    private String description;
    private AlbumType type;
    private boolean favourite;
    private Calendar createdDate;
    private List<Image> images;
}
