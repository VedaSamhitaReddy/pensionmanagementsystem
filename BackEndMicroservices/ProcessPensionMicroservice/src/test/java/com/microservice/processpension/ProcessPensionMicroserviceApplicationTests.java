package com.microservice.processpension;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;
import com.microservice.processpension.controllertest.ProcessPensionControllerTest;
import com.microservice.processpension.servicetest.ProcessPensionServiceTest;

@RunWith(Suite.class)
@SuiteClasses({ProcessPensionControllerTest.class,ProcessPensionServiceTest.class})
class ProcessPensionMicroserviceApplicationTests {

}



