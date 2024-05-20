package br.com.api.condominio.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.api.condominio.Model.Blocos;

@Repository
public interface BlocosDAO extends JpaRepository<Blocos,Integer> {
    
}
