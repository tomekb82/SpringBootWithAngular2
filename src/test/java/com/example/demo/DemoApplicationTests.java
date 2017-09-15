package com.example.demo;

import com.example.demo.dao.PersonDao;
import com.example.demo.model.Album;
import com.example.demo.model.Person;
import org.dozer.DozerBeanMapper;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

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


	@Autowired
	private PersonDao personDao;

	@Test
	@Transactional
	public void givenExistingPersons_whenFindingPersonByFirstName_thenFound() {
		personDao.save(new Person("Erich", "Gamma"));
		Person person = new Person("Kent", "Beck");
		personDao.save(person);
		personDao.save(new Person("Ralph", "Johnson"));

		Person personFromDb =  personDao.findPersonsByFirstnameQueryDSL("Kent").get(0);
		Assert.assertEquals(person.getId(), personFromDb.getId());
	}

	@Test
	@Transactional
	public void givenExistingPersons_whenFindingMaxAgeByName_thenFound() {
		personDao.save(new Person("Kent", "Gamma", 20));
		personDao.save(new Person("Ralph", "Johnson", 35));
		personDao.save(new Person("Kent", "Zivago", 30));

		Map<String, Integer> maxAge = personDao.findMaxAgeByName();
		Assert.assertTrue(maxAge.size() == 2);
		Assert.assertSame(35, maxAge.get("Ralph"));
		Assert.assertSame(30, maxAge.get("Kent"));
	}
}

