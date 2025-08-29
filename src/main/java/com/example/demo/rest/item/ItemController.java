package com.example.demo.rest.item;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.MediaType;
import jakarta.validation.Valid;

@RestController
public class ItemController {

    List<Item> itemList = new java.util.ArrayList<>(List.of(
        new Item(1, "ペン", 100, "CD-A01", LocalDate.now()),
        new Item(2, "ノート", 200, "CD-A01", LocalDate.now())
    ));

    @GetMapping("/items")
    @ResponseBody
    @CrossOrigin
    public List<Item> getItems() {

        // たまに、システムエラーを発生させる
        if (Math.random() > 0.9) {
            throw new RuntimeException("Simulated error");
        }

        // 処理を少し遅らせる
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    return itemList;
    }

    @PostMapping(value = "/item", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @CrossOrigin
    public Item item(@Valid @RequestBody Item item){
        
        itemList.add(item);
        System.out.println("POST /item -> " + item);
        return item;
    }
}
