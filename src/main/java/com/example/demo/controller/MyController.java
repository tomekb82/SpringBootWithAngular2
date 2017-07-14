package com.example.demo.controller;

import java.io.IOException;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.demo.model.Image;
import com.example.demo.model.ImageType;
import java.util.List;
import java.util.ArrayList;

@RestController
public class MyController {

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

    @RequestMapping(value = "/images", method = RequestMethod.GET)
    public List<Image> getImages() {
        Image img1 = new Image();
        img1.setId(1L);
        img1.setName("image 1");
        img1.setType(ImageType.NATURE);
        img1.setUrl("http://1/2/3");


        Image img2 = new Image();
        img2.setId(2L);
        img2.setName("image 2");
        img2.setType(ImageType.CHILD);
        img2.setUrl("http://1/2/3");

        List<Image>  images = new ArrayList();
        images.add(img1);
        images.add(img2);

       return images;
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
