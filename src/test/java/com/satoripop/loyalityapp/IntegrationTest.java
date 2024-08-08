package com.satoripop.loyalityapp;

import com.satoripop.loyalityapp.config.AsyncSyncConfiguration;
import com.satoripop.loyalityapp.config.EmbeddedSQL;
import com.satoripop.loyalityapp.config.JacksonConfiguration;
import com.satoripop.loyalityapp.config.TestSecurityConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(
    classes = { LoyalityappApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class, TestSecurityConfiguration.class }
)
@EmbeddedSQL
public @interface IntegrationTest {
}
