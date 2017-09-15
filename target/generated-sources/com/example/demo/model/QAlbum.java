package com.example.demo.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAlbum is a Querydsl query type for Album
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QAlbum extends EntityPathBase<Album> {

    private static final long serialVersionUID = -1719298160L;

    public static final QAlbum album = new QAlbum("album");

    public final DateTimePath<java.util.Calendar> createdDate = createDateTime("createdDate", java.util.Calendar.class);

    public final StringPath description = createString("description");

    public final BooleanPath favourite = createBoolean("favourite");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final ListPath<Image, QImage> images = this.<Image, QImage>createList("images", Image.class, QImage.class, PathInits.DIRECT2);

    public final StringPath name = createString("name");

    public final StringPath opis = createString("opis");

    public final EnumPath<com.example.demo.dto.AlbumType> type = createEnum("type", com.example.demo.dto.AlbumType.class);

    public QAlbum(String variable) {
        super(Album.class, forVariable(variable));
    }

    public QAlbum(Path<? extends Album> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAlbum(PathMetadata metadata) {
        super(Album.class, metadata);
    }

}

