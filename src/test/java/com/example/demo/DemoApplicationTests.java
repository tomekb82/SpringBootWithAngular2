package com.example.demo;

import com.example.demo.model.Album;
import org.dozer.DozerBeanMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {

	DozerBeanMapper mapper;

	@Before
	public void before() throws Exception {
		mapper = new DozerBeanMapper();
	}

	@Test
	public void contextLoads() {
	}



	@Test
	public void givenSourceObjectAndDestClass_whenMapsSameNameFieldsCorrectly_thenCorrect() {
		Album source = new Album();
		source.setName("Dozer");
		source.setOpis("Dozer");
		com.example.demo.dto.Album dest = mapper.map(source, com.example.demo.dto.Album.class);

		assertEquals(dest.getName(), "Dozer");
		assertEquals(dest.getDescription(), "Dozer");

	}
}

