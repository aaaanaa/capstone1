package com.example.capstone.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class BoardDTO {
    @NotNull
    private long post_no;

    @NotNull
    private String nickName;
//    private String boardTitle;
    @NotNull
    private String postContent;

    private int postVisit;
    private String postCreateDate;
    private String postUpdateDate;

}

