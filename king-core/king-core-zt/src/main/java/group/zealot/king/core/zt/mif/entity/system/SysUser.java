package group.zealot.king.core.zt.mif.entity.system;

import com.alibaba.fastjson.annotation.JSONField;
import group.zealot.king.core.zt.mif.entity.BaseEntity;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;


@Setter
@Getter
public class SysUser extends BaseEntity {
    private String username;
    @JSONField(serialize=false)
    private String password;
    private String level;
    private LocalDateTime lastLoginTime;
}
