package com.example.demo.controller;

import com.example.demo.model.Image;
import com.example.demo.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController
public class MyController {

    private static final String PREFIX_URL = "http://localhost:8080/image/";
    private static final String DIR = "images";

    @Autowired
    ImageRepository imageRepository;

    private static String getPath (String folder) {
        ClassLoader loader = Thread.currentThread().getContextClassLoader();
        URL url = loader.getResource(folder);
        String path = url.getPath();
        return path;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/update",
            method = RequestMethod.GET)
    public void updateDB() throws IOException {

        List<String> lista = new ArrayList<>();
        Files.list(Paths.get(getPath(DIR)))
                .forEach(e -> lista.add(e.getFileName().toString()));
        lista.stream()
                .map(fileName -> new Image(fileName, PREFIX_URL + fileName))
                .forEach(e->imageRepository.save(e));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "save",
            method = RequestMethod.POST,
            produces = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<?> save(@Valid @RequestBody Image image, HttpServletRequest request) {
        imageRepository.save(image);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/image",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Image findByName(@RequestParam(required=true) String name) {
        return (Image) imageRepository.findByName(name);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/images", method = RequestMethod.GET)
    public List<Image> findAll() {
       return (List<Image>) imageRepository.findAll();
    }

    @RequestMapping(value = "/image/{name}",
            method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImage(@PathVariable String name) throws IOException {

        ClassPathResource imgFile = new ClassPathResource("images/" + name + ".jpg");
        byte[] bytes = StreamUtils.copyToByteArray(imgFile.getInputStream());

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(bytes);
    }

}
