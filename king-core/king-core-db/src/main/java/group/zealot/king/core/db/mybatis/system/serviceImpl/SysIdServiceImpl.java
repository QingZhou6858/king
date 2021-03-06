package group.zealot.king.core.db.mybatis.system.serviceImpl;

import group.zealot.king.core.db.mybatis.base.BaseMapper;
import group.zealot.king.core.db.mybatis.base.BaseServiceImpl;
import group.zealot.king.core.zt.mif.entity.system.SysId;
import org.springframework.stereotype.Service;
import group.zealot.king.core.zt.mif.service.system.SysIdService;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

import static group.zealot.king.core.db.mybatis.Daos.*;
import static org.springframework.transaction.annotation.Propagation.NOT_SUPPORTED;

@Service
public class SysIdServiceImpl extends BaseServiceImpl<SysId, Long> implements SysIdService {

    @Transactional(propagation = NOT_SUPPORTED)
    public Long getId() {
        SysId sysId = new SysId();
        sysId.setInsertTime(LocalDateTime.now());
        sysIdDao.insert(sysId);
        return sysId.getId();
    }

    @Override
    protected BaseMapper getBaseMapper() {
        return sysIdDao;
    }
}
