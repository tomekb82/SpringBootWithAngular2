package com.example.demo.utility;

/**
 * Created by tomek on 17.08.17.
 */
public class EnumUtility {

    public static <T extends Enum<T>> T getEnumFromString(Class<T> c, String string) throws IllegalArgumentException{
        if( c != null && string != null ) {
            return Enum.valueOf(c, string.trim().toUpperCase());
        }
        return null;
    }
}
