package com.example.demo.controller;

import com.example.demo.dto.ImageType;
import com.example.demo.model.Image;
import com.example.demo.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
public class MyController {

    @Autowired
    ImageRepository imageRepository;

    @RequestMapping(value = "/demo", method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImage() throws IOException {

        ClassPathResource imgFile = new ClassPathResource("images/demo.jpg");
        byte[] bytes = StreamUtils.copyToByteArray(imgFile.getInputStream());

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(bytes);
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/image", method = RequestMethod.GET)
    public Image getImageByName(@RequestParam(required=true) String name) {
        return (Image) imageRepository.findByName(name);
    }
    

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/images", method = RequestMethod.GET)
    public List<Image> getImages() {
        /*Image img1 = new Image();
        img1.setId(1L);
        img1.setName("image 1");
        img1.setType(ImageType.NATURE);
        img1.setUrl("http://localhost:8080/image/1");


        Image img2 = new Image();
        img2.setId(2L);
        img2.setName("image 2");
        img2.setType(ImageType.CHILD);
        img2.setUrl("http://localhost:8080/image/2");

        List<Image>  images = new ArrayList();
        images.add(img1);
        images.add(img2);*/

       return (List<Image>) imageRepository.findAll();
    }

    @RequestMapping(value = "/image/{id}", method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImage(@PathVariable int id) throws IOException {

        ClassPathResource imgFile = new ClassPathResource("images/image-" + id + ".jpg");
        byte[] bytes = StreamUtils.copyToByteArray(imgFile.getInputStream());

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(bytes);
    }

}
