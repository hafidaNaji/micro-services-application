package net.naji.billingservice.entities.model;

import lombok.*;

@Getter @Setter @Builder @AllArgsConstructor @NoArgsConstructor
public class Customer {
    private Long id;
    private String name;
    private String email;

}
