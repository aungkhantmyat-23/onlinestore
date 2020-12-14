package com.shop.config;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.SerializationFeature;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedHeaders("*").allowedMethods("*").allowedOrigins("*");
	}

	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {

		@JsonIgnoreProperties({"hibernateLazyInitializer"})
		class IgnoreHibernateProperties{}

		converters.stream().filter(c -> c instanceof AbstractJackson2HttpMessageConverter)
				.findFirst()
				.ifPresent(conv -> {
					var converter = (AbstractJackson2HttpMessageConverter) conv;
					converter.getObjectMapper().disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
					converter.getObjectMapper().addMixIn(Object.class, IgnoreHibernateProperties.class);
				});
	}

}
