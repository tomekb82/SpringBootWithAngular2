package com.example.demo.controller;

import com.example.demo.dto.AlbumType;
import com.example.demo.model.Album;
import com.example.demo.model.Image;
import com.example.demo.repository.AlbumRepository;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.awt.print.Book;
import java.util.List;

@RestController
@RequestMapping(value = "/albums")
@Api(value="albums", description="Operations managing albums")
public class AlbumController {

    @Autowired
    AlbumRepository albumRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "", method = RequestMethod.GET)
    @ApiOperation(value = "Get albums", nickname = "Get albums")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = Album.class, responseContainer = "List"),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")}) // Swagger annotation
    public List<Album> getAll() {
        return (List<Album>) albumRepository.findAll();
    }

    @ApiOperation(value = "Add new album", nickname = "Add new album")
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/add",
            method = RequestMethod.POST,
            produces = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<?> create(@Valid @RequestBody Album album, HttpServletRequest request) {
        albumRepository.save(album);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @ApiOperation(value = "Get book by id", nickname = "Get book by id")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "Book's id", required = true, dataType = "long", paramType = "path", defaultValue="1")
    })
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success", response = Album.class, responseContainer = "List"),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")}) // Swagger annotation<<<
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Album> findById(@RequestParam(required=true) Long id) {
        return (List<Album>) albumRepository.findOne(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/findByName",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Album> findByName(@RequestParam(required=true) String name) {
        return (List<Album>) albumRepository.findByName(name);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/findByType",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Album> findByType(@RequestParam(required=true) String type) {
        return (List<Album>) albumRepository.findByType(AlbumType.fromString(type));
    }
}
