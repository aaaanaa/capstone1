package com.example.capstone.service;

import com.example.capstone.dto.BoardDTO;
import com.example.capstone.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;

    public void save(BoardDTO boardDTO){
        boardRepository.save(boardDTO);
    }

    public List<BoardDTO> findAll() {
        return boardRepository.findAll();
    }

    public void updateVisit(Long post_no) {
        boardRepository.updateVisit(post_no);
    }

    public BoardDTO findById(Long post_no) {
        return boardRepository.findById(post_no);
    }

    public void update(BoardDTO boardDTO) {
        boardRepository.update(boardDTO);
    }

    public void delete(Long post_no) {
        boardRepository.delete(post_no);
    }
}
