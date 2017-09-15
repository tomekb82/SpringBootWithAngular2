package com.example.demo.service;

import com.example.demo.dto.AlbumType;
import com.example.demo.utility.EnumUtility;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

/**
 * Created by tomek on 15.09.17.
 */
@Service
public class AlbumService {

    List<AlbumType> getAlbumTypes(String type){

        if(type!=null) {
            return Arrays.asList(EnumUtility.getEnumFromString(AlbumType.class, type));
        }else{
            return Arrays.asList(AlbumType.ADULT, AlbumType.CHILD, AlbumType.NATURE);
        }

    }

}
