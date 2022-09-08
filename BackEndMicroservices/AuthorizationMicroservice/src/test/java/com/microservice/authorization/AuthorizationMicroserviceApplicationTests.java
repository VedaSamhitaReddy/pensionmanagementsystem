
package com.microservice.authorization;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;
import com.microservice.authorization.controller.AuthorizationController;
import com.microservice.authorization.entitytest.AuthorizationEntityTest;
import com.microservice.authorization.servicetest.AuthorizationServiceTest;

@RunWith(Suite.class)
@SuiteClasses({ AuthorizationEntityTest.class ,AuthorizationServiceTest.class})
public class AuthorizationMicroserviceApplicationTests {
}

