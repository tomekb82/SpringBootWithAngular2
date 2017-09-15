package com.example.demo.dto;

import com.example.demo.utility.EnumUtility;

/**
 * Created by tomasz.belina on 2017-07-14.
 */
public enum AlbumType {
    NATURE, CHILD, ADULT;

    public static AlbumType fromString(String name) {
        return EnumUtility.getEnumFromString(AlbumType.class, name);
    }
}
