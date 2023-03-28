package com.ECE651.cultureMingle.service;

import com.ECE651.cultureMingle.model.Event;
import com.ECE651.cultureMingle.model.User;

import java.util.List;

public interface EventService {

    Event createEvent(Event event);

    Event updateEvent(Event event);

    Event joinEvent(String id, User user);

    List<Event> getAllEvent();

    Event getEventById(String id);

    void joinEvent(String id, User user);

    void deleteEvent(String id);
}
