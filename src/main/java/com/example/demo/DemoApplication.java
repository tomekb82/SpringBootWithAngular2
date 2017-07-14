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

import java.io.File;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class DemoApplication {

	private static final Logger log = LoggerFactory.getLogger(DemoApplication.class);

	private static final String PREFIX_URL = "http://localhost:8080/image/";
	private static final String DIR = "images";

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	private static String getPath (String folder) {
		ClassLoader loader = Thread.currentThread().getContextClassLoader();
		URL url = loader.getResource(folder);
		String path = url.getPath();
		return path;
	}

	@Bean
	public CommandLineRunner demo(ImageRepository repository) {
		return (args) -> {

			List<String> lista = new ArrayList<>();
			Files.list(Paths.get(getPath(DIR)))
					.forEach(e -> lista.add(e.getFileName().toString()));
			lista.stream()
					.map(fileName -> new Image(fileName, PREFIX_URL + fileName))
					.forEach(e->repository.save(e));

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
