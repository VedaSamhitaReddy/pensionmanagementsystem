package com.microservice.processpension.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservice.processpension.entity.PensionDetails;
import com.microservice.processpension.entity.PensionTransactionDetail;

@Repository
public interface ProcessPensionRepository extends JpaRepository<PensionDetails,Long>{

}
