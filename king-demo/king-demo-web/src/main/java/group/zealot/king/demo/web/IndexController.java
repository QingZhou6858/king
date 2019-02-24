package group.zealot.king.demo.web;

import group.zealot.king.core.shiro.exception.ShiroException;
import group.zealot.king.core.shiro.realm.ShiroService;
import group.zealot.king.core.zt.mybatis.system.service.SysIdService;
import org.apache.shiro.SecurityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
    private Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private SysIdService sysIdService;
    @Autowired
    private ShiroService shiroService;

    @RequestMapping(value = "/")
    public String index(Model model, String username, String password) {
        model.addAttribute("id", sysIdService.getId());
        try {
            if (!shiroService.isAuthenticated()){
                shiroService.login(username, password);
            }
            model.addAttribute("sessionId", SecurityUtils.getSubject().getSession().getId());
        } catch (ShiroException e) {
            logger.error("登录异常", e);
        }

        return "index";
    }
}
