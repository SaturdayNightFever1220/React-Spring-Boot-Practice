package com.example.demo.rest.item;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Item {
    private Integer id;
    @NotBlank
    private String itemName;
    @NotNull(message = "price is required")
    @Positive(message = "price must be > 0")
    private Integer price;
    private String groupid;
    private LocalDate registDate;
}
