/*
 * Copyright 2009 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import com.example.demo.model.Album
import com.example.demo.service.AlbumService
import org.dozer.DozerBeanMapper
import org.dozer.loader.api.BeanMappingBuilder
import spock.lang.Specification

class SpockSpec extends Specification {

    def "should return 1 from first element of list"() {
        given:
            List<Integer> list = new ArrayList<>()

        when:
            list.add(1)

        then:
            1 == list.get(0)
    }

    def "should return 3 as list size"() {
        given:
            List list = Stub()
            list.size() >> 3
        expect:
            // let's see if this works
            list.size() == 3
    }

    def "should return single value"() {
        given:
            AlbumService albumService = Spy(AlbumService)
        when:
            int albums = albumService.getAlbumTypes('NATURE').size()
        then:
            albums == 1
    }

    def "should return 3 values"() {
        given:
            AlbumService albumService = Spy(AlbumService)
        when:
            int albums = albumService.getAlbumTypes().size()
        then:
            albums == 3
    }

    def "should throw exception"() {
        given:
            AlbumService albumService = Spy(AlbumService)
        when:
            albumService.getAlbumTypes('err')
        then:
            thrown(IllegalArgumentException)
    }

    private Album album = Stub()

    BeanMappingBuilder builder = new BeanMappingBuilder() {

        @Override
        protected void configure() {
            mapping(Album.class, com.example.demo.dto.Album.class).fields("opis", "description");

        }
    };

    def "dozer mapper of album dto"() {
        given:
            albumParams name: "Rush", opis: "dddd"
            DozerBeanMapper mapper = Spy(DozerBeanMapper);
            mapper.addMapping(builder);
        when:
            com.example.demo.dto.Album dest = mapper.map(album, com.example.demo.dto.Album.class);
        then:
            dest.getName() == "Rush"
            //dest.getDescription() == "dddd"
    }

    private albumParams(Map albumDetails) {
        album.getName() >> albumDetails['name']
        album.getOpis() >> albumDetails['opis']
    }
}