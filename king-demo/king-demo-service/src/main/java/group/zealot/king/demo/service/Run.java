package group.zealot.king.demo.service;

import group.zealot.king.core.zt.dubbo.DubboUtil;
import group.zealot.king.core.zt.spring.SpringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;


@SpringBootApplication(scanBasePackages = "group.zealot.king")
@EnableScheduling
@EnableAsync
@EnableJms
public class Run {
    private static Logger logger = LoggerFactory.getLogger(Run.class);

    public static void main(String[] args) {
        logger.info("启动");
        SpringUtil.setApplicationContext(SpringApplication.run(Run.class, args));
        initDubboService(SpringUtil.getApplicationContext());
        logger.info("启动结束");
    }

    private static void initDubboService(ApplicationContext applicationContext) {
        applicationContext.getBean(DubboUtil.class).registService();
    }
}
