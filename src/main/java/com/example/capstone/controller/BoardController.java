package com.example.capstone.controller;

import com.example.capstone.dto.BoardDTO;
import com.example.capstone.service.BoardService;
import jakarta.validation.Valid;
//import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RestController    //이부분 고침
@RequestMapping("/")
@Controller
@Slf4j
//@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping("/save")
    public String save(){
        return "save";
    }

    @PostMapping("/save")
    public String save(@Valid @ModelAttribute BoardDTO boardDTO){
        boardService.save(boardDTO);
        return "redirect:/list";
        //반환타입을 String으로 변경하고 /list url로 리다이렉션 해준다.
        //글작성이 성공하면 localhost:8080/list로 페이지가 넘어간다.
    }
    @GetMapping("/list")
    public String findAll(Model model){
        List<BoardDTO> boardDTOList = boardService.findAll();
        model.addAttribute("boardList", boardDTOList);
        return "list";
    }

    @GetMapping("/{post_no}")
    public String findById(@PathVariable("post_no") Long post_no, Model model) {
        //조회수 처리
        boardService.updateVisit(post_no);
        //상세내용 가져오기
        BoardDTO boardDTO = boardService.findById(post_no);
        model.addAttribute("post", boardDTO);
        return "detail";
    }

    //수정버튼 클릭시 수정화면으로 넘어가도록 하는 메서드(GET)
    @GetMapping("/update/{post_no}")
    public String update(@PathVariable("post_no") Long post_no, Model model){
        BoardDTO boardDTO = boardService.findById(post_no);
        model.addAttribute("post", boardDTO);  //board였음
        return "update";
    }
    //DB에 실절적으로 수정내용을 요청하는 메서드(POST)
    @PostMapping("/update/{post_no}")
    public String update(BoardDTO boardDTO, Model model){
        //update요청
        boardService.update(boardDTO);
        //findById로 수정된 내용을 다시조회
        BoardDTO dto = boardService.findById(boardDTO.getPost_no());
        model.addAttribute("post", dto);
        return "detail";
    }

    @GetMapping("/delete/{post_no}")
    public String delete(@PathVariable("post_no") Long post_no){
        boardService.delete(post_no);
        return "redirect:/list";
    }
}
