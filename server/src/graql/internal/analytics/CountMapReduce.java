/*
 * GRAKN.AI - THE KNOWLEDGE GRAPH
 * Copyright (C) 2018 Grakn Labs Ltd
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

package grakn.core.graql.internal.analytics;

import grakn.core.graql.internal.Schema;
import org.apache.tinkerpop.gremlin.structure.Vertex;
import org.apache.tinkerpop.gremlin.util.iterator.IteratorUtils;

import java.io.Serializable;
import java.util.Iterator;

/**
 * The MapReduce program for counting the number of instances excluding attributes and implicit relationships
 *
 */

public class CountMapReduce extends GraknMapReduce<Long> {

    // Needed internally for OLAP tasks
    public CountMapReduce() {
    }

    @Override
    public void safeMap(final Vertex vertex, final MapEmitter<Serializable, Long> emitter) {
        emitter.emit(vertex.value(Schema.VertexProperty.THING_TYPE_LABEL_ID.name()), 1L);
    }

    @Override
    Long reduceValues(Iterator<Long> values) {
        return IteratorUtils.reduce(values, 0L, (a, b) -> a + b);
    }
}
