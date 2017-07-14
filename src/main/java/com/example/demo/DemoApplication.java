package com.example.demo;

import com.example.demo.dto.ImageType;
import com.example.demo.model.Image;
import com.example.demo.repository.ImageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

	private static final Logger log = LoggerFactory.getLogger(DemoApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	@Bean
	public CommandLineRunner demo(ImageRepository repository) {
		return (args) -> {
			// save a couple of images
			Image img1 = new Image();
			img1.setName("image 1");
			img1.setType(ImageType.NATURE);
			img1.setUrl("http://localhost:8080/image/1");

			Image img2 = new Image();
			img2.setName("image 2");
			img2.setType(ImageType.CHILD);
			img2.setUrl("http://localhost:8080/image/2");

			repository.save(img1);
			repository.save(img2);

			// fetch all images
			log.info("images found with findAll():");
			log.info("-------------------------------");
			for (Image image : repository.findAll()) {
				log.info(image.toString());
			}
			log.info("");

			// fetch an individual image by ID
			Image image = repository.findOne(1L);
			log.info("Image found with findOne(1L):");
			log.info("--------------------------------");
			log.info(image.toString());
			log.info("");

			// fetch images by name
			log.info("Image found with findName('image 2'):");
			log.info("--------------------------------------------");
			for (Image image2 : repository.findByName("Bauer")) {
				log.info(image2.toString());
			}
			log.info("");
		};
	}
}
