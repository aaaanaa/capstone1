package com.example.capstone.repository;

import com.example.capstone.dto.BoardDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class BoardRepository {

    private final SqlSessionTemplate sql;

    public void save(BoardDTO boardDTO) {
        sql.insert("Post.save", boardDTO);
    }

    public List<BoardDTO> findAll() {
        System.out.println("findAll");
        return sql.selectList("Post.findAll");
    }

    public void updateVisit(Long post_no) {
        sql.update("Post.updateVisit", post_no);
    }
    public BoardDTO findById(Long post_no) {
        return sql.selectOne("Post.findById", post_no);
    }

    public void update(BoardDTO boardDTO) {
        sql.update("Post.update", boardDTO);
    }

    public void delete(Long post_no) {
        sql.delete("Post.delete", post_no);
    }

}
//
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//package com.example.capstone.repository;
//
//import com.example.capstone.dto.BoardDTO;
//import org.apache.ibatis.annotations.Mapper;
//import org.apache.ibatis.annotations.Param;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import java.util.List;
//import java.util.Optional;
//
//@Mapper
//public interface BoardRepository extends JpaRepository<BoardDTO, Long> {
//
//    Object save(BoardDTO boardDTO);
//
//    List<BoardDTO> findAll();
//
//    void updateVisit(@Param("post_no") Long post_no);
//
//    Optional<BoardDTO> findById(@Param("post_no") Long post_no);
//
//    void update(BoardDTO boardDTO);
//
//    void delete(@Param("post_no") Long post_no);
//}
